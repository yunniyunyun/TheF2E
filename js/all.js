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
                // markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
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
tl.to('.bg-start', {transform: 'translate(0, 100%) scale(0%)', opacity:0}, "<")
tl.to('.logo-text', {visibility: 'hidden'}, "<")
tl.to('.ready-users', {visibility: 'hidden'}, "<")
tl.to('h1', {visibility: 'hidden'}, "<")

// const t2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".cursor", // 決定scrolltrigger要以哪一個元素作為觸發基準點
//         markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
//         start: 'top 100%', // 決定動畫開始點的位置
//         end: 'top 1%', // 決定動畫結束點的位置
//         scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
//         },
// })
// t2.to('.cursor', {
//     top: '40px',
//     position: 'fixed',
// })
gsap.to(".page-2", {
    scrollTrigger: {
      trigger: ".page-2", //觸發得物件
      start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
      end: "+=500", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
      pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
      scrub: true, // 物件動畫根據卷軸捲動程度跑
      toggleClass: "active", // 增加移除的class，class名稱須為字串
      markers: true // 顯示標記
    }})