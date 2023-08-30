(function ($) {
    $(function () {


        $('#phone-nav').click(function () {
            $('body').toggleClass('navShown');
        })


        $('.sub-menu').parent().addClass('hasSubNav')
        if ($(window).width() > 991) {
            $('.hasSubNav').mouseenter(function () {
                $('.sub-menu').fadeIn(300)
                $(this).addClass('hasNavShow')
            })
            $('.hasSubNav').mouseleave(function () {
                $('.sub-menu').fadeOut(300)
                $(this).removeClass('hasNavShow')
            })
        }
        if ($(window).width() < 992) {
            
            
            $('.hasSubNav').append('<em></em>')
            $(".hasSubNav").each(function(){
                var $this = $(this);
                $this.find("em").on("click touch", function(){
                    $(".hasSubNav").removeClass("sub-active")
                    $(".sub-menu").slideUp();
                    if($this.find(".sub-menu:visible").length){
                        $(".hasSubNav").removeClass("sub-active")
                        $(".sub-menu").slideUp();
                    }
                    else{
                        $this.addClass("sub-active")
                        $(".sub-menu").slideUp();
                        $this.find(".sub-menu").slideDown();
                    }
                })
            })
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.main-header-section').addClass("sticky");
            } else {
                $('.main-header-section').removeClass("sticky");
            }
        });

        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }






        $(".popup-input input, .pawzibox-input-row").on('keyup', function () {
            var checkBoxes = [];
            $.each($(".popup-input input[name='dogName'], .pawzibox-input-row input[name='dogName']"), function () {
                checkBoxes.push($(this).val());
            });

            $('.dog-name').html(checkBoxes)
        });



        $("div.popup-modal").each(function () {

            var currentModal = $(this);
            $("div.popup-modal:first").fadeIn(0);
            //click next
            currentModal.find('.modal-show, .skip-step').click(function (e) {
                e.preventDefault();

                currentModal.fadeOut(0);
                currentModal.closest("div.popup-modal").next("div.popup-modal").fadeIn(0);
            });


            //click prev
            currentModal.find('.btn-prev').click(function (e) {
                e.preventDefault();
                currentModal.fadeOut(0);
                currentModal.closest("div.popup-modal").prev("div.popup-modal").fadeIn(0);
            });

            $('.no-thanks-modal .popup-input a').click(function (e) {
                e.preventDefault();
                currentModal.fadeOut(0);
                currentModal.closest("div.popup-modal").prev("div.popup-modal").fadeIn(0);
            })

        });


        $('.secondary-modal').each(function () {
            var currentModal = $(this);

            $('.no-thanks').click(function (e) {
                e.preventDefault();
                currentModal.fadeOut(0);
                $('.no-thanks-modal').fadeIn(0);
            })
            $('.no-thanks-modal .btn-prev, .no-thanks-modal .popup-input a').click(function (e) {
                e.preventDefault();
                currentModal.fadeOut(0);
            })
        })

        $('.even-happier-btn a').each(function () {

            var $_this = $(this)

            $_this.click(function (e) {
                e.preventDefault();
                $('.even-happier-btn a').removeClass('active')
                $(this).addClass('active')
            })

        })


        $('.address-confirm-trigger').click(function (e) {
            e.preventDefault();
            $('.address-confirm-popup-wrap').show();
        })
        $('.address-confirm-header figure, .confirm-modal-hide').click(function (e) {
            e.preventDefault();
            $('.address-confirm-popup-wrap').hide();
        })




        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.animated, .left-to-right, .right-to-left, .top-to-bottom, .bottom-to-top');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('is-inview');
                }
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');


        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $('.dog-footprint').addClass("is-inview");
            }
            /*else{
                $('.dog-footprint').removeClass("is-inview");
            }*/
        });


        $('.modal-popup-item').each(function () {
            var $_this = $(this);
            $_this.find('.popup-input > a').click(function () {
                setTimeout(function () {
                    $_this.next().find(".bubble-wrap p").fadeIn();
                }, 2000);
            })
        })

        setTimeout(function () {
            $('.modal-popup-item.popup-one').find(".bubble-wrap p").fadeIn();
        }, 2000);

        $('#radio-thirteen').click(function () {
            $('.dog-allergies .popup-radio input[type="checkbox"]').prop("checked", false);
        });

        $('.dog-allergies .popup-radio input[type="checkbox"]').click(function () {
            $('.dog-allergies .popup-radio input[type="radio"]').prop("checked", false);
        });


        //our-client-slider-wrap
        if ($('.our-client-slider').length) {
            $('.our-client-slider').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,

            })
        }

        //our-blog-slider-wrap
        if ($('#blog-slider').length) {
            $('#blog-slider').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                centerMode: false,
                focusOnSelect: false,

                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }

                },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        }
                 },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        }
                 }
                ],
            })

        }

        if ($('.pawzie-boxes-item-wrap').length) {
            $('.pawzie-boxes-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                navigation: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                
                centerMode: false,
                focusOnSelect: false,

                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }

                },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        }
                             },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        }
                             }
                            ],
            })

        }



    }) // End ready function.
})(jQuery)