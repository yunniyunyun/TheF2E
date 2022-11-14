// gsap.registerPlugin(ScrollTrigger, TextPlugin);
// gsap.to('.cursor', {opacity:0, duration:1, repeat: -1})
// gsap.to('.box', {x: 100, duration:1,})
// gsap.to('.box', {y: 100, duration:1, delay: 1})
$(document).ready(function () {
    $(".menu-btn").click(function (event) {
        event.preventDefault();
        $(".layout-side").toggleClass("open");
    });
  });

const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".btn-logo", // 決定scrolltrigger要以哪一個元素作為觸發基準點
                markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
                start: 'top 100%', // 決定動畫開始點的位置
                end: 'top 1%', // 決定動畫結束點的位置
                scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
                },
})
tl.to('.btn-logo', {
    top: '30px',
    left: '40px',
    position: 'fixed',
})
tl.to('.bg-road',{transform: 'translate(0, 10%) scale(80%)'}, "<")
tl.to('.char-f2e', {transform: 'translate(20%, 20%) scale(60%)'}, "<")
tl.to('.char-ui', {transform: 'translate(0, 20%) scale(60%)'}, "<")
tl.to('.char-team', {transform: 'translate(-20%, 20%) scale(60%)'}, "<")
  