import { useEffect, useState } from 'react'
import useStore from '@helpers/store'
import dynamic from 'next/dynamic'

import {
  gsap,
  TimelineMax,
  TweenMax,
  TweenLite,
  Linear,
  TextPlugin,
  ThrowPropsPlugin,
  EasePack,
  CSSPlugin,
  ScrollToPlugin,
  Power1,
  Power2,
  Power4,
  Expo,
} from "gsap";

const Scene1Left = dynamic(() => import('@components/canvas/sub-scenes/1_Left'), { ssr: false })
const Scene1Right = dynamic(() => import('@components/canvas/sub-scenes/1_Right'), { ssr: false })

const slogan_top = '/kv/slogan_top_fit.svg'
const slogan_bottom = '/kv/slogan_bottom_fit.svg'
const logo_jut35_white = '/logo_jut35_white.svg'

const Hero = props => {
  const videoEnded = useStore(state => state.videoEnded)

  useEffect(() => {
    // if (
    //   DeviceOrientationEvent &&
    //   DeviceOrientationEvent.requestPermission &&
    //   typeof DeviceOrientationEvent.requestPermission === "function"
    // ) {
    //   DeviceOrientationEvent.requestPermission().then((permissionState) => {
    //     if (permissionState === "granted") {
    //       window.addEventListener("deviceorientation", function(event) {
    //         alert(event.alpha);
    //       }, false);
    //     } else if (permissionState === "denied") {
    //       alert("denied");
    //     }
    //   });
    // }
    
    if (videoEnded == true) {

      // Hero
      gsap.to('.hero', {
        // x: -(window.innerWidth * 1) + "px",
        // ease: Linear.easeNone,
        ease: "none",
        scrollTrigger: {
          trigger: '.hero',
          invalidateOnRefresh: true,
          pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      });
      // gsap.to('.kvLeft', {
      //   x: window.innerWidth * .5 + "px",
      //   // ease: Linear.easeNone,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: '.nextWrap',
      //     invalidateOnRefresh: true,
      //     scrub: true,
      //     start: "top top",
      //     end: () => "+=" + window.innerHeight * 2,
      //     // markers: true,
      //   }
      // }, 1);
      // gsap.to('.kvRight', {
      //   // x: -(window.innerWidth * 0) + "px",
      //   // ease: Linear.easeNone,
      //   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: '.nextWrap',
      //     invalidateOnRefresh: true,
      //     scrub: true,
      //     start: "top top",
      //     end: () => "+=" + window.innerHeight * 2,
      //     // markers: true,
      //   }
      // });
      // gsap.to('.kvRightInner', {
      //   // x: '0%',
      //   transform: "translate(0%, 0%)",
      //   // ease: Linear.easeNone,
      //   // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: '.nextWrap',
      //     invalidateOnRefresh: true,
      //     scrub: true,
      //     start: "top top",
      //     end: () => "+=" + window.innerHeight * 2,
      //     // markers: true,
      //   }
      // });
      

      const kvSloganLoopingRange = () => {
        if (window.innerWidth > 959) {
          return window.innerWidth;
        } else {
          return window.innerWidth * 1.25;
        }
      }

      // const kvSloganLeftLooping = new TimelineMax({ repeat: -1 });
      // kvSloganLeftLooping.staggerFromTo('.hero .sloganTop', 40,
      //   { backgroundPositionX: 0, ease: Linear.easeNone },
      //   { backgroundPositionX: -(kvSloganLoopingRange() * 3) + 'px', ease: Linear.easeNone }
      // );

      // const kvSloganRightLooping = new TimelineMax({ repeat: -1 });
      // kvSloganRightLooping.staggerFromTo('.hero .sloganBottom', 40,
      //   { backgroundPositionX: -(kvSloganLoopingRange() * 3) + 'px', ease: Linear.easeNone },
      //   { backgroundPositionX: 0, ease: Linear.easeNone }
      // );

      // const mainLogoAnimate = function(ev) {
      //   const target = document.querySelector(".mainLogo");

      //   const evX = (ev == 'touchmove') ? ev.originalEvent.touches[0].clientX : ev.clientX;
      //   const evY = (ev == 'touchmove') ? ev.originalEvent.touches[0].clientY : ev.clientY;

      //   const sxPos = (evX / window.innerWidth * 50) * 0.7;
      //   const syPos = (evY / window.innerHeight * 50) * 0.7;

      //   gsap.to(target, 1, {
      //     css:{ "filter": "drop-shadow(" + Math.ceil(-sxPos) + "px " + Math.ceil(-syPos) + "px 20px rgba(0,0,0,.25))"},
      //     ease: Expo.easeOut
      //   });
      // };

      // window.addEventListener("touchstart", mainLogoAnimate);
      // window.addEventListener("touchend", mainLogoAnimate);
      // window.addEventListener("mousemove", mainLogoAnimate);
      // window.addEventListener("mouseleave", mainLogoAnimate);


      gsap.to('.kvLeft', {
        // x: '0%',
        transform: "translate(-50%, 0%)",
        // ease: Linear.easeNone,
        ease: "none",
        scrollTrigger: {
          trigger: '.nextWrap',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      });
      gsap.to('.kvRight', {
        transform: "translate(0%, 0%)",
        // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: '.nextWrap',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      });
      gsap.to('.kvRightInner', {
        transform: "translate(0%, 0%)",
        // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: '.nextWrap',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      });
      gsap.to('.mainLogo', {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: '.nextWrap',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          // markers: true,
        }
      });

    }


    // const countNumber = document.querySelectorAll('.countNumber');
    // countNumber.forEach((item)=>{
    //   var count = {val: item.dataset.start};
    //   var end = item.dataset.end;
    //   var speed = item.dataset.speed;
      
    //   // console.log(end);
    //   gsap.to(count, 2,
    //     {
    //       val: end,
    //       roundProps: "val",
    //       onUpdate: function(){
    //         item.textContent = count.val;
    //         item.classList.add('counting');
    //         // console.log($(ele));
    //       },
    //       ease: Linear.easeNone
    //     }
    //   );
    // });
  }, [videoEnded])

  return (
    <section className="hero relative w-screen h-screen">

      <div className="kvLeft relative w-screen h-screen bg-kv-1 overflow-hidden origin-top-left will-change-transform">
        <div className="kvLeftInner w-full h-full block opacity-0 translate-y-12">
          <Scene1Left />
        </div>
        <div className="sloganTop absolute top-0 left-0 z-10 w-full h-screen bg-contain bg-repeat-x -bg-no-repeat bg-left-top origin-top-left pointer-events-none opacity-0 -translate-y-12" style={{backgroundImage: `url(${slogan_top})`}}></div>
      </div>

      <div
        className="kvRight absolute top-0 left-0 w-full h-full bg-kv-2 overflow-hidden will-change-transform"
        // style={{clipPath: "polygon(5% 0, 100% 0%, 100% 100%, 0% 100%)", transform: "translate(100%, 0%)"}}
          style={{transform: "translate(100%, 0%)"}}
      >
        <div 
          className="kvRightInner w-full h-full block will-change-transform" 
          style={{transform: "translate(-50%, 0%)"}}
        >
          <Scene1Right />
          <div className="sloganBottom absolute top-0 left-0 z-10 w-full h-screen bg-contain bg-repeat-x bg-left-bottom translate-y-1 pointer-events-none" style={{backgroundImage: `url(${slogan_bottom})`}}></div>
        </div>
      </div>

      <div className="touchHelper absolute top-0 bottom-0 right-0 left-0 z-10 w-full h-full pointer-events-none md:hidden">
        <div className="absolute top-0 left-0 w-full h-1/4 pointer-events-auto"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 pointer-events-auto"></div>
        {/* <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
          <ul className='font-inner text-xl font-bold flex flex-col leading-snug'>
            <li>Alpha:    {orientation.alpha}</li>
            <li>Beta:     {orientation.beta}</li>
            <li>Gamma:    {orientation.gamma}</li>
            <li>Absolute: {orientation.absolute ? 'yes' : 'no'}</li>
          </ul>
        </div> */}
      </div>

      <div className="mainLogo absolute top-0 left-0 right-0 bottom-0 z-30 mx-auto w-4/5 md:w-1/2 h-full innerHeight bg-contain bg-no-repeat bg-center opacity-0 scale-90 pointer-events-none" style={{backgroundImage: `url(${logo_jut35_white})`}}></div>
    </section>
  )
}

export default Hero