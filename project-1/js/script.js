$( "#scrolltop" ).click(function(e) {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $(".background").css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = (elementHeight - scrollTop) / elementHeight;
          
      return opacity;
    }
  });
});
