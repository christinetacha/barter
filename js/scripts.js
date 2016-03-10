$(document).ready(function() {
  $(".btn-message").click(function(event) {
    $(".message-modal").fadeToggle();
    $(".modal-transparency").fadeToggle();
  });
  $(".modal-close").click(function(event) {
    $(".message-modal").fadeToggle();
    $(".modal-transparency").fadeToggle();
  });
});

$(document).ready(function() {
  $('.menu-toggle').click(function(event) {
    $(this).siblings().slideToggle();
  });
});
