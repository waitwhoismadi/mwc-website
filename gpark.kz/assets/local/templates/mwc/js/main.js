new WOW().init();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else if (currentScrollPos == 0) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-130px";
    }
    prevScrollpos = currentScrollPos;


    var scrolled;
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 10) {
        $("#navbar").addClass('active');
        $("#navbar").removeClass('nonactive');
    }
    if (10 > scrolled) {
        $("#navbar").addClass('nonactive');
        $("#navbar").removeClass('active');
    }
}

var swiper = new Swiper(".main-akcii-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    /*autoplay: {
    delay: 3000,
    },*/
    navigation: {
        nextEl: '.swiper-button-next-main-akcii',
        prevEl: '.swiper-button-prev-main-akcii',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: true,
    loopFillGroupWithBlank: true,
    effect: "creaive",
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

$('.sub-menu-parent .sub-menu-btn').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parent().removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).parent().addClass('active');
    }
    $(this).parent().find('.sub-menu').slideToggle();
});
$('.sub-menu-parent .menu-item').click(function (e) {
    e.preventDefault();
    var menu = $(this).next();
    if (menu.hasClass('active')) {
        menu.removeClass('active');
        menu.parent().removeClass('active');
    } else {
        menu.addClass('active');
        menu.parent().addClass('active');
    }
    menu.parent().find('.sub-menu').slideToggle();
});

$(".m-tog").on('click', function () {
    $(this).toggleClass('active');
    $(".m-tog-menu").toggleClass('active');
});

$('.main-products-item .main-products-open').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).text('Раскрыть');
        $(this).parents().removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).text('Скрыть');
        $(this).parents().addClass('active');
    }
    $(this).parents('.main-products-item').find('.main-products-con-center').slideToggle();
});

$('.main-products-filter .main-products-filter-btn').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    $(this).parent().find('form').slideToggle();
});

$('.zhk-choose-inner-item').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});

$('.mob-hidden-btn').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    $(this).parent().find('.mob-hidden').slideToggle();
});


(function ($) {
    var pl = /\+/g, searchStrict = /([^&=]+)=+([^&]*)/g, searchTolerant = /([^&=]+)=?([^&]*)/g, decode = function (s) {
        return decodeURIComponent(s.replace(pl, " "));
    };
    $.parseQuery = function (query, options) {
        var match, o = {}, opts = options || {}, search = opts.tolerant ? searchTolerant : searchStrict;
        if ('?' === query.substring(0, 1)) {
            query = query.substring(1);
        }
        while (match = search.exec(query)) {
            o[decode(match[1])] = decode(match[2]);
        }
        return o;
    };
    $.getQuery = function (options) {
        return $.parseQuery(window.location.search, options);
    };
    $.fn.parseQuery = function (options) {
        return $.parseQuery($(this).serialize(), options);
    };
}(jQuery));
$(document).ready(function () {

    $('a[href^="https://www.youtube.com"]').on('click', function (e) {
        var queryString = $(this).attr('href').slice($(this).attr('href').indexOf('?') + 1);
        var queryVars = $.parseQuery(queryString);
        if ('v' in queryVars) {
            e.preventDefault();
            var vidWidth = 560;
            var vidHeight = 315;
            if ($(this).attr('data-width')) {
                vidWidth = parseInt($(this).attr('data-width'));
            }
            if ($(this).attr('data-height')) {
                vidHeight = parseInt($(this).attr('data-height'));
            }
            var iFrameCode = '<iframe width="' + vidWidth + '" height="' + vidHeight + '" scrolling="no" allowtransparency="true" allowfullscreen="true" src="https://www.youtube.com/embed/' + queryVars['v'] + '?rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';
            $('#video .modal-body #player').html(iFrameCode);
            $('#video').on('show.bs.modal', function () {
                var modalBody = $(this).find('.modal-body #player');
                var modalDialog = $(this).find('.modal-dialog');
                var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
                newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
                newModalWidth += 'px';
            });
            $('#video').modal();
        }
    });
    $('#video').on('hidden.bs.modal', function () {
        $('#video .modal-body #player').html('');
    });
});

var swiper = new Swiper(".about-zhk-advans-mob", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "fade",
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});


$('.zhk-os-modal-links a').click(function (e) {
    var anchor = $(this).attr('href').replace("#", ".");
    $(this).addClass('active').siblings().removeClass('active');
    $(anchor).addClass('active').siblings().removeClass('active');
});


var swiper = new Swiper(".zhk-os-slider1", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-os-slider2", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-os-slider3", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-os-slider4", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-os-slider5", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-os-slider6", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-os-slider7", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".zhk-os-slider8", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    loopFillGroupWithBlank: false,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

var swiper = new Swiper(".about-slider", {
    slidesPerView: 2.5,
    spaceBetween: 15,
    slidesPerGroup: 1,
    speed: 1000,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    effect: "creaive",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    /*navigation: {
        nextEl: '.swiper-button-next-zhk',
        prevEl: '.swiper-button-prev-zhk',
    },*/
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.1,
            spaceBetween: 12
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 2.5,
            spaceBetween: 15
        }
    }
});

$('.vacan-head').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    $(this).parent().find('.vacan-hidden').slideToggle();
});

$('.ipfaq-head').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    $(this).parent().find('.ipfaq-hidden').slideToggle();
});

jQuery(document).ready(function ($) {
    if ($('.aparts-inner').find('.main-products-item').length > 9) {
        $('.show_hide_komm').click(function () {
            $('.aparts-inner .main-products-item:nth-child(n+10)').slideToggle('');
            $(this).toggleClass('opnd_g');
            if ($(this).hasClass('opnd_g')) {
                $(this).html('Скрыть');
            } else {
                $(this).html('Показать еще');
            }
        });
    } else {
        $('.show_hide_komm').hide();
    }
});


let labels = ['<div class="hist-pag-line"></div>', '<div class="hist-pag-line"></div>', '<div class="hist-pag-line"></div>', '<div class="hist-pag-line"></div>'];
var swiper = new Swiper(".hist-slider", {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    effect: "fade",
    pagination: {
        el: '.swiper-pagination-hist',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><div class="hist-pag-num">' + (index + 1) + '</div>' + (labels[index]) +
                '</div>';

        },
    }
});

$('.callback-btn').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    $(this).parent().parent().parent().slideToggle('slow');
    $(this).parent().parent().parent().siblings().slideToggle('slow');
});


$(() => {
    let stickyTop = 0,
        scrollTarget = false

    let timeline = $('.timeline__nav'),
        items = $('li', timeline),
        milestones = $('.timeline__section .milestone'),
        offsetTop = parseInt(timeline.css('top'))

    const TIMELINE_VALUES = {
        start: 160,
        step: 0
    }

    $(window).resize(function () {
        timeline.removeClass('fixed')

        stickyTop = timeline.offset().top - offsetTop

        $(window).trigger('scroll')
    }).trigger('resize')

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyTop) {
            timeline.addClass('fixed')
        } else {
            timeline.removeClass('fixed')
        }
    }).trigger('scroll')

    items.find('span').click(function () {
        let li = $(this).parent(),
            index = li.index(),
            milestone = milestones.eq(index)

        if (!li.hasClass('active') && milestone.length) {
            scrollTarget = index

            let scrollTargetTop = milestone.offset().top - 80

            $('html, body').animate({scrollTop: scrollTargetTop}, {
                duration: 1000,
                complete: function complete() {
                    scrollTarget = false
                }
            })
        }
    })

    $(window).scroll(function () {
        let viewLine = $(window).scrollTop() + $(window).height() / 4,
            active = -1

        if (scrollTarget === false) {
            milestones.each(function () {
                if ($(this).offset().top - viewLine > 0) {
                    return false
                }
                active++
            })
        } else {
            active = scrollTarget
        }

        timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px')

        items.filter('.active').removeClass('active')

        items.eq(active != -1 ? active : 0).addClass('active')
        milestones.filter('.active').removeClass('active')

        milestones.eq(active != -1 ? active : 0).addClass('active')
    }).trigger('scroll')

    $('.milestone').click(function () {
        $(this).addClass('active');
    })
})

$(document).scroll(function () {
    const scroll = $(this).scrollTop();
    const $main = $('.scroll');
    const height = $main.height();

    let percent = (scroll / height) * 162;

    $(".progress-bar-value").css('height', percent);
});

$(document).ready(function (){
    $(".contact-form").submit(function(e) {
        e.preventDefault()
        var form = $(this);
        jQuery.ajax({
            type: "POST",
            url: '/thanks.php',
            data: form.serialize(),
            success: function(data) {
                form.html(data);
                /*setInterval(function() {
                  location.reload();
                }, 3000);*/

            },
            error: function(jqXHR, text, error) {
                form.html(error);
            }
        });
        return false;
    });
})