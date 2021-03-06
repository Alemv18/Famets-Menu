/* global $ */
/* jshint maxlen:200 */
$(document).ready(function() {

  var $loginOverlay = $('#login-overlay');

  $('#form-almacen').on('click', function() {
    $loginOverlay.show();
  });

  $('.btn-logout').on('click', function() {
    delete window.localStorage.user;
    window.location.reload();
  });

  function validateEmail(email) {
    var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regexEmail.test(email);
  }

  function validatePassword(password) {
    return password;
  }

  function getEmailLocalPart(email) {
    return email.substring(0, email.indexOf('@'));
  }

  function logInUser(email) {
    var userName = getEmailLocalPart(email);
    window.localStorage.user = userName;

    window.location.reload();
  }

  $('#login-form input').change(function() {
    if (!$(this).hasClass('changed')) {
      $(this).addClass('changed');
    }
  });

  $('#login-form .close').on('click', function() {
    $loginOverlay.fadeOut(200);
  });

  $('#login-form .btn-submit').on('click', function() {
    var $emailField = $('input[name="email"]').removeClass('invalid changed');
    var $passwordField = $('input[name="password"]').removeClass('invalid changed');
    var email = $emailField.val();
    var password = $passwordField.val();

    var isEmailValid = validateEmail(email);
    var isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      $loginOverlay.fadeOut(200);
      logInUser(email);
    } else {
      if (!isEmailValid) {
        $emailField.addClass('invalid');
      }
      if (!isPasswordValid) {
        $passwordField.addClass('invalid');
      }
    }
  });
});

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();