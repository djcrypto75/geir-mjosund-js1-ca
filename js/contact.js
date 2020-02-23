jQuery(document).ready(function($) {
  $("#contactForm").submit(function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var email = $("#email");
    var message = $("#message");
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!firstName.val()) {
      $('#firstNameError').css("display", "block");
    } else {
      $('#firstNameError').css("display", "none");
    }

    if (!lastName.val()) {
      $('#lastNameError').css("display", "block");
    } else {
      $('#lastNameError').css("display", "none");
    }

    if (!regex.test(email.val())) {
      $('#emailError').css("display", "block");
    } else {
      $('#emailError').css("display", "none");
    }

    if (message.val().length <= 10) {
      $('#messageError').css("display", "block");
    } else {
      $('#messageError').css("display", "none");
    }
  }
});
