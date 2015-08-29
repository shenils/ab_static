$(document).ready(function() {
  $('header nav').affix({
    offset: {
      top: 60
    }
  });
  $('body').scrollspy({
    target: '#nav-link-container',
    offset: 150
  })
  var email_components = ["s", "@alphabeatsmusic", ".com"];
  var email = email_components.join("");
  $('#email-link').html(email).attr('href', 'mailto:'+email);
});


nav-link-container