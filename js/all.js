// gsap.registerPlugin(ScrollTrigger, TextPlugin);
// gsap.to('.cursor', {opacity:0, duration:1, repeat: -1})
// gsap.to('.box', {x: 100, duration:1,})
// gsap.to('.box', {y: 100, duration:1, delay: 1})
$(document).ready(function () {
    $(".menu-btn").click(function (event) {
        event.preventDefault();
        $(".menu-open").toggleClass("open");
    });
  });
  