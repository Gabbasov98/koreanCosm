function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },

        }
    })
}

function sliderProduct() {
    var swiper = new Swiper('.product .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 10,
        navigation: {
            nextEl: '.product .swiper-button-next',
            prevEl: '.product .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 45
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 45
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1150: {
                slidesPerView: 6,
                spaceBetween: 30
            },
        }
    })
}

function sliderHit() {
    var swiper = new Swiper('.hit .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 4,
        loop: "true",
        navigation: {
            nextEl: '.hit .swiper-button-next',
            prevEl: '.hit .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 2
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 4
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 4
            },
            1150: {
                slidesPerView: 4,
                spaceBetween: 4
            },
        }
    })
}

function sliderNew() {
    var swiper = new Swiper('.new .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 4,
        loop: "true",
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 2
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 4
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 4
            },
            1150: {
                slidesPerView: 4,
                spaceBetween: 4
            },
        }
    })
}

function sliderBrand() {
    var swiper = new Swiper('.brand-index .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 6,
        navigation: {
            nextEl: '.brand-index .swiper-button-next',
            prevEl: '.brand-index .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 4
            },
            420: {
                slidesPerView: 3,
                spaceBetween: 4
            },
            520: {
                slidesPerView: 4,
                spaceBetween: 4
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 6
            },
            1150: {
                slidesPerView: 6,
                spaceBetween: 6
            },
        }
    })
}

function sliderCollection() {
    var swiper = new Swiper('.collection .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 6,
        navigation: {
            nextEl: '.collection .swiper-button-next',
            prevEl: '.collection .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 3
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 3
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 3
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 3
            }
        }
    })
}

function gallerySlider1() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 9,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 9
            },
        }
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function sliderModal() {
    var swiper = new Swiper('.modal6 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.modal6 .swiper-button-next',
            prevEl: '.modal6 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 5
            },

        }
    })
}



$(document).ready(function() {
    sliderMain()
    sliderProduct()
    sliderHit()
    sliderNew()
    sliderBrand()
    sliderCollection()
    gallerySlider1()

    let p = $("p")
    console.log(p)


    for (let i = 0; i < p.length; i++) {
        console.log(p[i])
    }



    $(".header__search-hint span:last-child").click(function() {
        let value = $(this).text()
        $(".header__search input").val(value)
    })

    if (window.innerWidth > 768) {
        $('.header-menu__item-content').mCustomScrollbar();
    }

    $(".header-menu__item-show").click(function() {
        if (window.innerWidth < 768) {
            $(this).toggleClass("header-menu__item-show--active")
            $(this).siblings(".header-menu__item-hidden").toggleClass("header-menu__item-hidden--active")
        } else {
            $(".header-menu__item-show").removeClass("header-menu__item-show--active")
            $(this).addClass("header-menu__item-show--active")
            $(".header-menu__item-hidden").removeClass("header-menu__item-hidden--active")
            $(this).siblings(".header-menu__item-hidden").addClass("header-menu__item-hidden--active")
        }
    })

    $(".header__catalog-btn").click(function() {
        $(this).toggleClass("header__catalog-btn--active")
        $(".header-menu").toggleClass("header-menu--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".header-menu__inner"); // тут указываем ID элемента
        var div2 = $(".header__catalog-btn")
        if (div2.is(e.target)) {
            div.parents(".header-menu").removeClass("header-menu--active");
            $(".header__catalog-btn").removeClass("header__catalog-btn--active")
        } else if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.parents(".header-menu").removeClass("header-menu--active");
            $(".header__catalog-btn").removeClass("header__catalog-btn--active")
        }
    });

    $(".header__burger").click(function() {
        $(".header__top").show()
    })
    $(".header__top-close").click(function() {
        $(".header__top").hide()
    })
    $(".header__brands-mob").click(function() {
        $(this).toggleClass("header__brands-mob--active");
        $(".header__brands-inner").toggleClass("header__brands-inner--active");
    })
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".header__brands-inner"); // тут указываем ID элемента
        var div2 = $(".header__brands-mob")
        if (div2.is(e.target)) {
            div.removeClass("header__brands-inner--active");
            $(".header__brands-mob").removeClass("header__brands-mob--active")
        } else if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("header__brands-inner--active");
            $(".header__brands-mob").removeClass("header__brands-mob--active")
        }
    });



    if (window.innerWidth < 992) {
        $(".brand-page__menu .brand-page__menu-item").hide();
        $(".brand-page__menu-all").hide()
    }

    $(".brand-page__menu-top").click(function() {
        if (window.innerWidth < 992) {
            $(this).toggleClass("brand-page__menu-top--active")
            $(".brand-page__menu .brand-page__menu-item").slideToggle();
            $(".brand-page__menu-item--hide").hide()
            $(".brand-page__menu-all").slideToggle()
        }
    })
    $(".brand-page__menu-all").click(function() {
        $(this).hide();
        $(".brand-page__menu-item").css("display", "flex")
    })

    $(".brand-page .brand-filter__select").niceSelect()
    $(".catalog .brand-filter__select").niceSelect()
    $(".podborka .brand-filter__select").niceSelect()

    $(".cabinet__menu-open").click(function() {
        $(this).toggleClass("cabinet__menu-open--active")
        $(".cabinet__menu").slideToggle()
    })



    $(".cabinet-item__info-copy").click(function() {
        $(".cabinet-item__info-copy-text").addClass("cabinet-item__info-copy-text--active")
        setTimeout(hideCopyText, 3000)
    })

    function hideCopyText() {
        $(".cabinet-item__info-copy-text").removeClass("cabinet-item__info-copy-text--active")
        $(".cabinet-item__nav-copy-text").removeClass("cabinet-item__nav-copy-text--active")
    }
    $(".cabinet-item__nav-copy").click(function() {
        $(".cabinet-item__nav-copy-text").addClass("cabinet-item__nav-copy-text--active")
        setTimeout(hideCopyText, 3000)
    })

    $(".cabinet-pass__toggle-btn").click(function() {
        if ($(this).hasClass("cabinet-pass__toggle-btn--hide")) {
            console.log(true)
            $(this).removeClass("cabinet-pass__toggle-btn--hide")
            $(this).addClass("cabinet-pass__toggle-btn--show")
            $(this).siblings("input").attr("type", "text")
        } else {
            $(this).addClass("cabinet-pass__toggle-btn--hide")
            $(this).removeClass("cabinet-pass__toggle-btn--show")
            $(this).siblings("input").attr("type", "password")
        }
    })

    cartCalc()

    $(".catalog-nav__item-show").click(function() {
        if ($(this).hasClass("catalog-nav__item-show--active")) {
            $(this).removeClass("catalog-nav__item-show--active")
        } else {
            $(".catalog-nav__item-show").removeClass("catalog-nav__item-show--active")
            $(this).addClass("catalog-nav__item-show--active")
        }
    })
    $(".catalog-filter__item-show").click(function() {
        $(this).toggleClass("catalog-filter__item-show--active")
    })

    $(".catalog-filter__mob-top").click(function() {
        $(".catalog-filter").slideToggle()
    })

    $(".selected-filter__item button").click(function() {
        $(this).parents(".selected-filter__item").hide()
    })

    $("[data-fancybox]", {
        idleTime: false
    });

    $(".catalog-item__block-show").click(function() {
        $(this).toggleClass("catalog-item__block-show--active")
    })

    $(".catalog-item__feed-show").click(function() {
        $(".catalog-item__feed").removeClass("catalog-item__feed--hide")
        $(this).hide()
    })

    $(".order__city-item").click(function() {
        let text = $(this).text()
            // $(".order__city-input").val('');
        $(".order__city-input").attr("value", text)
    })
    $(".order__city-reset").click(function() {
        $(this).siblings("input").val(' ');
    })
    $(".podborka__all").click(function() {
        $(".podborka__item").removeClass("podborka__item--hide ")
        $(this).hide()
    })

    $('input[type="tel"]').mask('+7 999-999-9999', { placeholder: '+7             ' });

    $("input[name='method']").click(function() {
        let val = $(this).attr("value");
        $(".order__way").hide();
        $(`.order__${val}`).show()
    })

    $(".modal3__input input").click(function() {
        console.log("sdds")
        if ($(this).val() !== "") {
            console.log("sdds")
        }
    })

    function modalLabelView() {
        // console.log("sdds")
        // if ($(".modal3__input input").val() !== "") {
        //     console.log("sdds")
        // }
        $(".modal3__input input").on('input', function() {
            if ($(this).val() !== "") {
                console.log("sdds")
                $(this).addClass("active")
                $(this).siblings("label").addClass("active")
            }
        })
    }
    $(".modal").on('shown.bs.modal', function() {
        console.log("dfjdfh")
        modalLabelView()
        modalTabs()
        sliderModal()
    })


    $(".brand-item-more").click(function() {
        $(this).hide();
        $(".brand-item-page__item").removeClass("brand-item-page__item--hide")
    })

    $("a").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
        if (elementClick === "#feedback") {
            console.log(true)
            $(".catalog-item__block--feedback .catalog-item__block-show").addClass("catalog-item__block-show--active")
        }
        // console.log(elementClick)
        return false;
    });



})

function modalTabs() {
    $(".modal3__tab").click(function() {
        let path = $(this).attr("data-tabs-path");
        $(".modal3__tab").removeClass("modal3__tab--active");
        $(`.modal3__tab[data-tabs-path="${path}"]`).addClass("modal3__tab--active");
        $(".modal3__content").removeClass("modal3__content--active");
        $(`.modal3__content[data-tabs-target="${path}"]`).addClass("modal3__content--active");

    })
}

// Калькулятор корзины
function cartCalc() {
    $('.cart__calc .cart__calc-minus').click(function() {
        let a = $(this).closest('.cart__calc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cart__calc').find('input').val(b);
        } else {
            $(this).closest('.cart__calc').find('input').val(a);
            $(".cart__calc-minus").addClass("disabled");
        }
    });
    $('.cart__calc .cart__calc-plus').click(function() {
        let a = $(this).closest('.cart__calc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cart__calc').find('input').val(b);
        $(".cart__calc-minus").removeClass("disabled");
    });





}