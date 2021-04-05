
$(window).ready(function() {
    $('.search_title').addClass('up');
    $(window).scroll(function(event) {
        let current_scroll = document.documentElement.scrollTop;
        let height1 = $('.promotion').offset().top;
        let height2 = $('.banner2').offset().top;
        let height3 = $('.smart').offset().top;
        let height4 = $('.benefit').offset().top;
        let height5 = $('.system').offset().top;
        let height6 = $('.review').offset().top;
        let height7 = $('.banner3').offset().top;
        if(current_scroll >= (height1-200) & current_scroll < height1) {
            $('.promotion_car').addClass('up');
        }
        else if (current_scroll >= (height2 - 200) & current_scroll < height2) {
            $('.banner2_box').addClass('up');
        }
        else if (current_scroll >= (height3 - 200) & current_scroll < height3) {
            $('.icon_box').addClass('up');
        }
        else if (current_scroll >= (height4 - 200) & current_scroll < height4) {
            $('.benefit_box').addClass('up');
        }
        else if (current_scroll >= (height5 - 200) & current_scroll < height5) {
            $('.system_img').addClass('up');
            $('.system_text').addClass('up');
        }
        else if (current_scroll >= (height6 - 200) & current_scroll < height6) {
            $('.review_box').addClass('up');
        }
        else if (current_scroll >= (height7 - 200)) {
            $('.banner3_box').addClass('up');
        }
    })
})
setInterval(function() {
    if(didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);
function hasScrolled() {
    let current_scroll = document.documentElement.scrollTop;
    let height1 = $('.promotion').prop('scrollHeight');
    let height2 = $('.banner2').prop('scrollHeight');
    if(current_scroll >= (height1 - 200)) {
        $('.promotion_car').addClass('up');
    }
    else if (current_scroll >= (height2 - 200)) {
        $('.banner2_box').addClass('up');
    }
}

function faq_toggle1() {
    $('#faq1').toggle();
}
function faq_toggle2() {
    $('#faq2').toggle();
}
function faq_toggle3() {
    $('#faq3').toggle();
}
function faq_toggle4() {
    $('#faq4').toggle();
}