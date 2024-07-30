$(document).ready(function () {
  updateCheckboxBackgrounds();
  
  $(".btn button").on("click", function (e) {
    e.preventDefault();

    let isValid = true;

    // Get Data
    let firstName = $("#firstname").val().trim();
    let lastName = $('input[type="text"]').eq(1).val().trim();
    let email = $('input[type="email"]').val().trim();
    let message = $("textarea").val().trim();
    let consent = $("#consent").is(":checked");
    let queryType = $('input[name="query_name"]:checked').length;

    // Check Valid Field
    isValid = validateField(firstName, "#firstNameError") && isValid;
    isValid = validateField(lastName, "#lastNameError") && isValid;
    isValid = validateEmailField(email) && isValid;
    isValid = validateField(message, "#messageError") && isValid;
    isValid = validateCheckbox(consent, "#checkError") && isValid;
    isValid = validateField(queryType, "#queryError", true) && isValid;

    if (isValid) {
      $("form")[0].reset();
      $(".success_message").show();
      setTimeout(() => $(".success_message").hide(), 5000);
    }

    // Update Radio BG After Check
    updateCheckboxBackgrounds();
  });

  // checkboxes
  $('input[name="query_name"]').on("change", updateCheckboxBackgrounds);

  function validateEmailField(email) {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      $("#emailError").show();
    } else {
      $("#emailError").hide();
    }
    return isValidEmail;
  }

  function validateField(value, errorSelector, isNumeric = false) {
    const isValid = isNumeric ? value > 0 : value;
    if (!isValid) {
      $(errorSelector).show();
    } else {
      $(errorSelector).hide();
    }
    return isValid;
  }

  function validateCheckbox(consent, errorSelector) {
    const isValid = consent;
    if (!isValid) {
      $(errorSelector).show();
    } else {
      $(errorSelector).hide();
    }
    return isValid;
  }

  function updateCheckboxBackgrounds() {
    $('input[name="query_name"]').each(function () {
      if ($(this).is(":checked")) {
        $(this).parent().css("background","hsl(148, 38%, 91%)");
      } else {
        $(this).parent().css("background","");
      }
    });
  }

  // Check Valid Email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
