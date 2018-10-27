// function resizeFontsize() {
//     var width = document.documentElement.clientWidth;
//     document.documentElement.style.fontSize = width / 7.5 + 'px';
// }
// resizeFontsize();
// window.addEventListener('orientationchange', resizeFontsize);
// window.addEventListener('resize', resizeFontsize);
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        // pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
        }, 
        onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        } 
    });
    var $music = document.querySelector('.music');
    $('.musicBtn').click(function(){
        if($music.paused){
            $music.play();
            $('.music_img').attr('src','images/musicBtn.png');
        }else{
            $music.pause();
            $('.music').removeAttr('autoplay');
            $('.music_img').attr('src','images/musicBtnOff.png');
        }
        
    })
})