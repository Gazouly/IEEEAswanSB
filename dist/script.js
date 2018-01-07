$(function () {
    var rel = $('body[rel]').attr('rel');
    $('.menu a:eq(' + rel + ') , .m_menu a:eq(' + rel + ')').addClass('active');
    $('.sitemap a:eq(' + (rel - 1) + ')').addClass('active');
    $('#m_btn').on('click', function () {
        $('#m_menu').sidebar('toggle');
    });
});
/*Nice Scroll
$(document).ready(function () {
    $("html").niceScroll();
});
/*Navigation Bar*/
$(document).ready(function () {
    $('.right.menu.open').on("click", function (e) {
        e.preventDefault();
        $('.ui.vertical.menu').toggle();
    });
    $('.ui.dropdown').dropdown();
});
/*Navigation Bar*/
/*Index page*/
$(document).ready(function () {
    $('.ui.checkbox').checkbox();
});
/*Contact Form validation*/
$(function () {
    $('#subscribe').form({
     email: {
            identifier: 'email'
            , rules: [
                {
                    type: 'email'
                    , prompt: 'Enter a valid email address'
                }
            ]
        }
    })
});
/*Contact Form validation*/
/*Contact Form validation*/
$(function () {
    $('#contact').form({
        name: {
            identifier: 'name'
            , rules: [
                {
                    type: 'empty'
                    , prompt: 'Enter your name'
                }
            ]
        }
        , email: {
            identifier: 'email'
            , rules: [
                {
                    type: 'email'
                    , prompt: 'Enter a valid email address'
                }
            ]
        }
        , message: {
            identifier: 'message'
            , rules: [
                {
                    type: 'empty'
                    , prompt: 'Enter the content of the message'
                }
                , {
                    type: 'maxLength[500]'
                    , prompt: 'Your message must be less than or equal to 500 characters'
                }
            ]
        }
    })
});
/*Contact Form validation*/
/*Comment Form validation*/
$(function () {
    $('#comment').form({
        name: {
            identifier: 'name'
            , rules: [
                {
                    type: 'empty'
                    , prompt: 'Enter your name'
                }
            ]
        }
        , email: {
            identifier: 'email'
            , rules: [
                {
                    type: 'email'
                    , prompt: 'Enter a valid email address'
                }
            ]
        }
        , gender: {
            identifier: 'gender'
            , rules: [
                {
                    type: 'empty'
                    , prompt: 'Choose a value'
                }
            ]
        }
        , message: {
            identifier: 'message'
            , rules: [
                {
                    type: 'empty'
                    , prompt: 'Enter the content of the message'
                }
                , {
                    type: 'maxLength[200]'
                    , prompt: 'Your comment must be less than or equal to 200 characters'
                }
            ]
        }
    })
});
/*Comment Form validation*/
/*Carousel*/
$('.carousel').carousel({
    interval: 4000
});
/*Carousel*/
/*Index page*/
/*Footer*/
$(document).ready(function () {
    $('.url.example .ui.embed').embed();
});
/*Footer*/
$('.ui.embed').embed();
/*About page*/
$(document).ready(function () {
    //Dimmer
    $('#dimmer').dimmer({
        on: 'hover'
    });
    $('#dimmer').on('click', function () {
        $('.page.dimmer').dimmer('show');
    });
    // Accordion
    $('.ui.accordion').accordion();
});
/*About page*/

//Upcoming Events modal
$(window).load(function () {
    "use strict";
    $('.ui.modal').modal('show');
});