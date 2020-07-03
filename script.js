gsap.registerPlugin(ScrollTrigger);

//Timeline to play the falling apple animation on scroll
let tween = gsap.timeline({
  paused:true
});

//Timeline to play the cloud animation
let t1 = gsap.timeline();

let t2 = gsap.timeline();

ScrollTrigger.addEventListener("scrollStart", () => tween.play());

tween.to(".apple", {y:"43vh", duration:1})
.to(".apple", {x:"30vmin", y:"55vmin", duration:0.5})
.to(".apple", {x:"30vmin", y:"75vmin", duration:1}, "-=0.5")
.fromTo(".thbu1", {opacity:0}, {opacity:1, duration:0.5})
.fromTo(".thbu2", {opacity:0}, {opacity:1, duration:0.5})
.fromTo(".thbu3", {opacity:0}, {opacity:1, duration:0.5})
.fromTo(".gravity", {opacity:0}, {opacity:1, duration:1});

//Cloud animation
t1.fromTo(".cloud1",
{
  left:"110vmin",
},
{
  left:"-10vmin",
  duration:30,
  stagger:{
    repeat:-1,
    yoyo:true
  }
});

t2.fromTo(".cloud2",
{
  right:"150vmin",
},
{
  right:"-60vmin",
  duration:40,
  stagger:{
    repeat:-1,
    yoyo:true
  }
})