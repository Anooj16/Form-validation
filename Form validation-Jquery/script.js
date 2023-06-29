$(document).ready(function() {
    $('#login').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true
        }
      },
      messages: {
        email: {
          required: 'Please enter your email address.',
          email: 'Please enter a valid email address.'
        },
        password: {
          required: 'Please enter your password.'
        }
      },
      errorClass: 'error', // Apply the 'error' class to error messages
      submitHandler: function(form) {
       
        form.submit();
      }
    });
  });