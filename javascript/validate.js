// JavaScript Document
jQuery.validator.setDefaults({
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

$.validator.addMethod('mypassword', function(value, element) {
    return this.optional(element) || (value.match(/[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/));
},
'Password must contain at least one special character.');

$(document).ready(function () {
  $('#contact').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10
      },
      email: {
        required: true,
        email: true
      },
      password: {
		  required: true,
		  minlength : 8,
		  mypassword: true
	  },
      conformpassword: {
		required: true,
		equalTo : "#password",
        minlength : 8,
		mypassword: true
      },
	  fileupload: {
		  required: true,
	  },
    },
    messages: {
      name: {
        required: "Please enter your name",
      },
      email: {
        required: "Please enter @gmail.com or @example.com",
      },
      phone: {
        required: "Please enter 10 digit Phone Number"
      },
	  password: {
		  required: "Please enter a password"
	  },
	  conformpassword: {
		 required: "Please enter a confirm password",
		 equalTo: "Please enter password doesn't match"
	  },
	  fileupload: {
		  required: "Please upload .jpg and .png files"
	  }
    },
  });
});


// File upload validation in javascript

function fileValidation() {
            var fileInput = 
                document.getElementById('file');
              
            var filePath = fileInput.value;
          
            // Allowing file type
            var allowedExtensions = 
                    /(\.jpg|\.png)$/i;
              
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type');
                fileInput.value = '';
                return false;
            } 
            else 
            {
              
                // Image preview
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById(
                            'imagePreview').innerHTML = 
                            '<img src="' + e.target.result
                            + '"/>';
                    };
                      
                    reader.readAsDataURL(fileInput.files[0]);
                }
            }
        }
