$(document).ready(function () {
  //slider
  $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      adaptiveHeight: true,
      infinite: true,
    }
    let extraOptions = {}
    if (slider.hasClass('servises')) {
      extraOptions = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
    }
  ]
      }
    } else if (slider.hasClass('history')) {
      extraOptions = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
    }
  ]
      }
    }else if (slider.hasClass('partners')) {
      extraOptions = {
        slidesToShow: 5.3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.1,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    }
  ]
      }
    }else if (slider.hasClass('sertificates')) {
      extraOptions = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    }
  ]
      }
    }else if (slider.hasClass('awards')) {
      extraOptions = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    }
  ]
      }
    }
    slider.slick($.extend({}, extraOptions, options ));
  })


  
});
