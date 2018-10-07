//ここからメニュー

//ここまでメニュー

//ここからslick
$(function () {
  $('.slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<i class="far fa-hand-point-left slick-prev"></i>',
    nextArrow: '<i class="far fa-hand-point-right slick-next"></i>'
    //    autoplay: true
  });
});
//ここまでslick

//ここからnav
$(function () {
  var state = false;
  var scrollpos;

  $('.burger').on('click', function () {
    if (state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({
        'top': -scrollpos
      });
      state = true;
    } else {
      $('body').removeClass('fixed').css({
        'top': 0
      });
      window.scrollTo(0, scrollpos);
      state = false;
    }
  });

});
//ここまでnav
