$(document).ready(function() {

  // closed button
  $(".close").click(function() {
    $(".about").css("display", "none");
  });

  $(".main-window").delay(10000).fadeOut("slow");
});
