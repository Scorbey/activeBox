$ (function() {

   /* Fixed Header */
   const header = $('#header');
   const intro = $('#intro');
   const introHeight = intro.innerHeight();
   let scrollPosition = $(window).scrollTop();


   $(window).on('scroll load resize', function () {
      scrollPosition = $(this).scrollTop();
      if(scrollPosition > introHeight) {
         header.addClass ('fixed')
      } else {
         header.removeClass ('fixed')
      }

   })

   /*Smooth scroll */
   $('[data-scroll]').on ('click', function(event){
      event.preventDefault() ;
      let elementId = $(this).data('scroll');
      let elementOffSet = $(elementId).offset().top
      nav.removeClass('show') ;
      $('html, body').animate({
         scrollTop: elementOffSet - 60
      }, 700);
   });

   /*nav__toggle*/
   let nav = $('#nav');
   let navToggle = $('#nav__toggle')
   navToggle.on('click', function(event) {
      event.preventDefault();
      nav.toggleClass('show');
   });


   /*Slider*/
   let slider = $('#rewiewsSlider')


   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      arrows: false,
      dots: true,
   });
});