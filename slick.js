$(document).ready(function(){
    $('.blog__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-caret-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-caret-right' aria-hidden='true'></i></button>",
        pauseOnHover: false,
       responsive: [
            {
              breakpoint: 1071,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
});

$(document).ready(function(){
    $('.fuatures__product-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-caret-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-caret-right' aria-hidden='true'></i></button>",
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1071,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
    });
});

$(document).ready(function(){
    $('.types__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev-types pull-left'>prev</button>",
        nextArrow:"<button type='button' class='slick-next-types pull-right'>next</button>",
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1071,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
});


