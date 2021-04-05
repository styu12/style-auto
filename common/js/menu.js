$(window).ready(function() {
    $('.sub_menu').hide();
});

const big_menu = document.querySelector(".nav");

function sub_show(event) {
    let elem = event.target;
    if(elem.classList.contains('nav_li')) {
        $('.sub_li').hide();
        let sub_target = elem.dataset.value;
        $('.sub_menu').show();
        $(`${sub_target}`).show();
    }
};

big_menu.addEventListener('mouseover', sub_show);

const sub = document.querySelector(".sub_menu");
const sub_nav = document.querySelectorAll(".sub_li");

sub.addEventListener('mouseout', function(){
    $('.sub_menu').hide();
})
for(i=0;i<sub_nav.length;i++) {
    sub_nav[i].addEventListener('mouseover', function(){
        $('.sub_menu').show();
    })
}