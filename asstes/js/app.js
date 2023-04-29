$(function () {
  // banner js section start
  $('.banner_slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'banner_slider_dots',
  });
  // banner js section end

  //   new product js section start
  $('.new_product_slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right product_slider_icon"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
        }
      },
    ]
  });

  // new product js section end

  // deals js saction start
  $('#deal_intro').countdown('2024/10/10', function (event) {
    var $this = $(this).html(event.strftime(''
      + ' '
      + '<div><h3>%d</h3><p>Days</p></div> '
      + '<span>:</span>'
      + '<div><h3>%H</h3><p>Hour</p></div> '
      + '<span>:</span>'
      + '<div><h3>%M</h3><p>Minute</p></div> '
      + '<span>:</span>'
      + '<div><h3>%S</h3><p>Sec</p></div>'));
  });
  // deals js section end

  // offer js section start
  $('.offer_slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    dotsClass: 'offer_slider_dots',
  });

  // offer js section end

  // latest js section start
  $('.latest_slider').slick({
    arrows: false,
    slidesToShow: 4,
    dots: true,
    dotsClass: 'latest_slider_dots',
  });
  // latest js section end


  // about page leadership js start


  $('.leadership_product_slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-chevron-left leadership_slider_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right leadership_slider_icon"></i>',
  });

  // about page leadership js end

  //about page review Slider start
  $('.about_review_slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    dotsClass: 'about_page_review_slider_dots',
    asNavFor: '.about_review_slider_navs'
  })

  $('.about_review_slider_navs').slick({
    arrows: false,
    slidesToShow: 6,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.about_review_slider'
  })

  //about page review Slider end

  // about page instagram js start
  $('.about_instagram_slider').slick({
    arrows: false,
    slidesToShow: 6,
    dots: true,
    dotsClass: 'about_instagram_slider_dots',
  });

  // about page instagram js end


  $('.releted_products_slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-arrow-left  releted_products_slider-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right releted_products_slider-arrow"></i>',
  })
  $('.shop_product_item_slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.shop_product_item_small_slider'
  })
  $('.shop_product_item_small_slider').slick({

    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.shop_product_item_slider',
    centerMode: true,
    focusOnSelect: true
  })

//   $('.product_slider').slick({
//     slidesToShow: 4,
//     dots: true,
//     dotsClass: 'banner_dots',
//     prevArrow: '<i class="fa-solid fa-chevron-left product_slider_arrow"></i>',
//     nextArrow: '<i class="fa-solid fa-chevron-right product_slider_arrow"></i>',
// })

})


new VenoBox();





const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))