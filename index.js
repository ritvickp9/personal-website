const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
 });
});



hiddenElements.forEach((el)=> observer.observe(el));



const hiddenElementss = document.querySelectorAll('.texthidden');

const observerr = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('textshow');
    }else{
      entry.target.classList.remove('textshow');
    }
 });
});



hiddenElementss.forEach((el)=> observerr.observe(el));




let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".middle", 10, { y: -1800 })
  // .to(".life", 10, { y: -1200 })
  // .to("#skills", 10, { y: -2000 })
//   .to(".girl", 10, { y: -200 }, "-=10")
//   .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
//   .to(".middle", 10, { top: "0%" }, "-=10")
//   .fromTo(".middle", { opacity: 0 }, { opacity: 1, duration: 3 })
//   .fromTo(".middle", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

  console.log("Hello my fellow nerd!")


  