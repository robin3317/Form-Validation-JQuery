$(function() {

  $("#errorUsername").hide();
  $("#errorEmail").hide();
  $("#errorTelephone").hide();
  $("#errorPassword").hide();
  $("#errorConfirmPassword").hide();

  $("#submit").attr("disabled","disabled");

  let errorUsername = false;
  let errorEmail = false;
  let errorTelephone = false;
  let errorPassword = false;
  let errorConfirmPassword = false;
  
  //-------------focusout function--------------
  $("#username").focusout(function() {
    checkUsername();
    enableButton();
  });

  $("#email").focusout(function() {
    checkEmail();
    enableButton();
  });

  $("#telephone").focusout(function() {
    checkTelephone();
    enableButton();
  });

  $("#password").focusout(function() {
    checkPassword();
    enableButton();
  });

  $("#confirmPassword").focusout(function() {
    checkConfirmPassword();
    enableButton();
  });

  //--------------check function-----------------
  function checkUsername() {
    let usernameLength = $("#username").val().length;
    if (usernameLength < 5 || usernameLength > 15) {
      $("#errorUsername").html("Should be between 5-20 characters");
      $("#errorUsername").show(); 
      errorUsername = true;
    }else {
      $("#errorUsername").hide();
    }
  }

  function checkEmail() {
    let pattern = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i);
    if (pattern.test($("#email").val())) {
      $("#errorEmail").hide();
    }else {
      $("#errorEmail").html("Invalid email address");
      $("#errorEmail").show();
      errorEmail = true;
    }
  }

  function checkTelephone() {
    if ($.isNumeric($("#telephone").val()) == false) {
      $("#errorTelephone").html("Telephone number should be numeric");
      $("#errorTelephone").show();
      errorTelephone = true;
    }else {
      $("#errorTelephone").hide();
    }
  }

  function checkPassword() {
    let passwordLength = $("#password").val().length;
    if (passwordLength < 7) {
      $("#errorPassword").html("At least 7 characters");
      $("#errorPassword").show(); 
      errorPassword = true;
    }else {
      $("#errorPassword").hide();
    }
  }

  function checkConfirmPassword() {
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();
    if (password != confirmPassword) {
      $("#errorConfirmPassword").html("Password doesn't match");
      $("#errorConfirmPassword").show();
      errorConfirmPassword = true;
    }else {
      $("#errorConfirmPassword").hide();
    }
  }

  function enableButton() {
    if ($("#username").val() != "" &&
    $("#email").val() != "" &&
    $("#telephone").val() != "" &&
    $("#password").val() != "" &&
    $("#confirmPassword").val() != ""
  ) {
    $("#submit").removeAttr("disabled");
  }
  }

  $("#submit").click(function() {
      $(".element").hide();
      $(".header").html("<h1>You Successfully Sign Up!</h1>");
  });

});