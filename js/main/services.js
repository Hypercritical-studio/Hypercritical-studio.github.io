import MouseFollower from"mouse-follower";import Lenis from"@studio-freight/lenis";import lozad from"lozad";import{ScrollTrigger}from"gsap/all";let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);document.addEventListener("DOMContentLoaded",(function(){lozad(".lozad",{rootMargin:"200px 0px",loaded:function(e){}}).observe()}));let lenis=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.on("scroll",(e=>{})),requestAnimationFrame(raf),document.addEventListener("DOMContentLoaded",(function(){let e=select("#toTop");function t(){(window.scrollY||document.documentElement.scrollTop)>1.2*window.innerHeight?e.style.display="block":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,ScrollTo:{y:".hero-main"},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}))})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("res",e)})),gsap.registerPlugin(ScrollTrigger);let videotl=gsap.timeline({scrollTrigger:{trigger:".cb-intro-figure",start:"top 90%",end:"top 10",scrub:!0,markers:!1,toggleActions:"play none none reverse"}});videotl.to(".cb-intro-figure",{width:"98%",height:"98vh",ease:"expo.inOut"}),gsap.registerPlugin(ScrollTrigger);let redifinetl=gsap.timeline({scrollTrigger:{trigger:".hc-greeting-bg",start:"top 20%",end:"bottom top",scrub:2,markers:!1,toggleActions:"play none none reverse"}});redifinetl.to(".hc-greeting-bg-media",{x:"-20%",ease:"expo.inOut"});