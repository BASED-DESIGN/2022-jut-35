import { forwardRef, useEffect, useRef, useState } from "react"
import dynamic from 'next/dynamic'
import useStore from '@helpers/store'
import { gsap } from "gsap"
// import Odometer from 'react-odometerjs';

import {
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
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0
});

const video = '/video.mp4'

const logo_jut35_icon_black = '/logo_jut35_icon_black.svg'
const logo_jut35_icon_white = '/logo_jut35_icon_white.svg'
const logo_jutgroup_icon_black = '/logo_jutgroup_icon_black.svg'
const logo_jut35_white = '/logo_jut35_white.svg'
const logo_jut35_s_white = '/logo_jut35_s_white.svg'
const logo_jutgroup_white = '/logo_jutgroup_white.svg'

const slogan_top_white = '/slogan_top_white.svg'
const slogan_bottom_white = '/slogan_bottom_white.svg'
const slogan_top = '/kv/kv1_layer_3_2.svg'
const slogan_bottom = '/kv/kv2_layer_3_2.svg'

const Scene1Left = dynamic(() => import('@components/canvas/sub-scenes/1_Left'), { ssr: false })
const Scene1Right = dynamic(() => import('@components/canvas/sub-scenes/1_Right'), { ssr: false })
const BackgroundMans = dynamic(() => import('@components/canvas/BackgroundMans'), { ssr: false })

const IndexPage = forwardRef((props, ref) => {

  const [loadState, setLoadState] = useState()

  const [coverLogoValue, setCoverLogoValue] = useState(0)
  const [yearValue, setYearValue] = useState(0)
  const [videoCurrentState, setVideoCurrentState] = useState(0)
  const [videoState, setVideoState] = useState('ready')


  useEffect(() => {

    setCoverLogoValue(20);
    setYearValue(1987);
    setTimeout(()=>{
      setCoverLogoValue(35);
      setYearValue(2022);
    }, 500);

    gsap.to('.coverLogo', 1, {
      opacity: 1,
      ease: Expo.easeIn,
      // delay: 1,
      onComplete: () => {}
    });

    gsap.to('.coverStartButton', 1, {
      opacity: 1,
      scale: 1,
      ease: Expo.easeIn,
      delay: 1,
      onComplete: () => {
        // console.log(loadState);
        setTimeout(()=>{
          setLoadState(true);
        }, 1000);
      }
    });

    const coverStartButton = document.querySelector(".coverStartButton");
    const coverVideo = document.querySelector(".coverVideo");
    const videoFrame = coverVideo.querySelector(".videoFrame");
    const video = videoFrame.querySelector(".video");
    const skipVideoButton = videoFrame.querySelector(".skipVideoButton");

    coverStartButton.addEventListener("click", startPlayVideo, false);
    function startPlayVideo(){
      setVideoState('start');
      handlePlayButton();
    }

    skipVideoButton.addEventListener("click", skipVideo, false);
    function skipVideo(){
      setTimeout(()=>{
        setVideoState('ends');
      }, 500);
      video.pause();
    }

    video.addEventListener("click", handlePlayButton, false);
    async function playVideo() {
      try {
        await video.play();
        // coverVideo.classList.toggle("playing");
        var i = setInterval(function() {
          if (video.readyState > 0) {
            // modal_video minutes = parseInt(video.duration / 60, 10);
            // var seconds = video.duration % 60;
            var duration = video.duration;
            var currentTime = video.currentTime;
            var currentPercentage = Math.floor((currentTime / duration) * 100);
            // console.log(currentPercentage);
            
            setVideoCurrentState(currentPercentage + "%");

            if (parseInt(duration) - parseInt(currentTime) == 0) {
              clearInterval(i);
              // coverVideo.classList.remove("playing");
              setVideoState('ends');
              // setTimeout(()=>{}, 1000);
            }
          }
        }, 100);
      } catch (err) {}
    }

    function handlePlayButton() {
      if (video.paused) {
        playVideo();
        setVideoState('play');
      } else {
        video.pause();
        setVideoState('pause');
        // coverVideo.classList.remove("playing");
      }
    }

  }, []);

  useEffect(() => {  
    if (videoState == 'ends') {
      gsap.to('.kvLeft .kvLeftInner', 4, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: .6
      });
      gsap.to('.kvLeft .sloganTop', 4, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: .6
      });
      gsap.to('.hero .mainLogo', 3, {
        opacity: 1,
        scale: 1,
        ease: Expo.easeOut,
        delay: 1.5
      });
    }
  }, [videoState]);

  useEffect(() => {  
    // console.log(scrollerRef)
    // const target = document.querySelector('.wrap-main');
    // const observerItem = document.querySelectorAll('.fadeIn');

    // [...observerItem].forEach((item)=>{
    //   item.classList.add('enter');
    // })

    // translate scroll
    // const target = document.querySelector('.wrap-main');
    // if (target != null){
    //   const observerItem = document.querySelectorAll('.fadeIn');
    //   const observer = new MutationObserver(function(mutations) {
    //     mutations.forEach(function(mutationRecord) {
    //       const scrollTop = target.getBoundingClientRect().top;
    //       // console.log(scrollTop);
    //       [...observerItem].forEach((item)=>{
    //         var containScroll = -scrollTop + window.innerHeight * 0.75;
    //         var itemScroll = item.getBoundingClientRect().top - scrollTop;
    //         // console.log(containScroll + ', ' + itemScroll);
    //         if (containScroll > itemScroll) {
    //           // console.log(item);
    //           item.classList.add('enter');
    //         }
    //       });
    //     });    
    //   });
    //   observer.observe(target, { attributes : true, attributeFilter : ['style'] });
    // } else {
      document.addEventListener('scroll', inViewItems);
      inViewItems();
      function inViewItems(){
        document.querySelectorAll(".fadeIn").forEach((item) => {
          if (item.getBoundingClientRect().y - window.innerHeight * 0.75 < 0) {
            item.classList.add("enter");
          } else {
            // item.classList.remove("enter");
          }
        });
      }
    // }

    gsap.registerPlugin(ScrollTrigger);
    
    // console.log(loadState);

    if (loadState == true) {

      // Hero
      gsap.to('.hero', {
        x: -(window.innerWidth * 1) + "px",
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
      gsap.to('.kvLeft', {
        x: window.innerWidth * .5 + "px",
        // ease: Linear.easeNone,
        ease: "none",
        scrollTrigger: {
          trigger: '.wrap',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      }, 1);
      gsap.to('.kvRight', {
        // x: -(window.innerWidth * 0) + "px",
        // ease: Linear.easeNone,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: '.wrap',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      });
      gsap.to('.kvRightInner', {
        // x: '0%',
        transform: "translate(0%, 0%)",
        // ease: Linear.easeNone,
        // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: '.wrap',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      });
      gsap.to('.kvRightInner', {
        // x: '0%',
        transform: "translate(0%, 50%)",
        // ease: Linear.easeNone,
        // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: '.intro',
          invalidateOnRefresh: true,
          scrub: true,
          start: "top bottom",
          end: () => "+=" + window.innerHeight,
          // markers: true,
        }
      });
      
      // gsap.to('.loadCover .bg', 1,{
      //   opacity: 0,
      //   // scale: 1,
      //   // backgroundColor: "transparent",
      //   ease: Expo.easeIn,
      //   delay: 1,
      //   onComplete: () => {
      //     console.log('end');
      //   }
      // });

      // gsap.to('.mainLogo', {
      //   opacity: 0,
      //   // ease: Linear.easeNone,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: '.wrap',
      //     invalidateOnRefresh: true,
      //     scrub: true,
      //     start: "top top",
      //     end: () => "+=" + window.innerHeight * 0.5,
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

      const kvSloganLeftLooping = new TimelineMax({ repeat: -1 });
      kvSloganLeftLooping.staggerFromTo('.hero .sloganTop', 40,
        { backgroundPositionX: 0, ease: Linear.easeNone },
        { backgroundPositionX: -(kvSloganLoopingRange() * 3) + 'px', ease: Linear.easeNone }
      );

      const kvSloganRightLooping = new TimelineMax({ repeat: -1 });
      kvSloganRightLooping.staggerFromTo('.hero .sloganBottom', 40,
        { backgroundPositionX: -(kvSloganLoopingRange() * 3) + 'px', ease: Linear.easeNone },
        { backgroundPositionX: 0, ease: Linear.easeNone }
      );

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

      // Intro
      gsap.to('.groupIconBg', {
        y: '-50vh',
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: '.intro',
          invalidateOnRefresh: true,
          // pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2.5,
          // markers: true,
        }
      });
      gsap.to('.mainIconBg', {
        y: '-50vh',
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: '.intro',
          invalidateOnRefresh: true,
          // pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2.5,
          // markers: true,
        }
      });

      // New Way
      gsap.to('.newWay .sloganGroup', {
        position: 'fixed',
        opacity: 0.3,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: '.newWay',
          invalidateOnRefresh: true,
          // pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          // markers: true,
        }
      });

      gsap.to('.newWay .sloganTop', {
        // position: 'fixed',
        opacity: 1,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: '.newWay',
          invalidateOnRefresh: true,
          // pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          // markers: true,
        }
      });

      gsap.to('.newWay .sloganTop', {
        opacity: 0,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: '.newWayList .listItem:nth-child(2)',
          invalidateOnRefresh: true,
          // pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 1.5,
          // markers: true,
        }
      });

      gsap.to('.newWay .sloganBottom', {
        position: 'fixed',
        opacity: 1,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: '.newWayList .listItem:nth-child(2)',
          invalidateOnRefresh: true,
          // pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          // markers: true,
        }
      });

      gsap.to('.newWay .sloganBottom', {
        opacity: 0,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: '.newWayList .listItem:nth-child(4)',
          invalidateOnRefresh: true,
          // pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 1,
          // markers: true,
        }
      });

      const sloganLoopingRange = () => {
        if (window.innerWidth > 959) {
          return window.innerWidth * 1.25;
        } else {
          return window.innerWidth * 1.5;
        }
      }

      const NWsloganLeftLooping = new TimelineMax({ repeat: -1 });
      NWsloganLeftLooping.staggerFromTo('.newWay .sloganTop', 40,
        { backgroundPositionX: 0, ease: Linear.easeNone },
        { backgroundPositionX: -(sloganLoopingRange() * 3) + 'px', ease: Linear.easeNone }
      );

      const NWsloganRightLooping = new TimelineMax({ repeat: -1 });
      NWsloganRightLooping.staggerFromTo('.newWay .sloganBottom', 40,
        { backgroundPositionX: -(sloganLoopingRange() * 3) + 'px', ease: Linear.easeNone },
        { backgroundPositionX: 0, ease: Linear.easeNone }
      );

      let currentPos = window.pageYOffset;
      const callDistort = function() {
        const newPos = window.pageYOffset;
        const diff = newPos - currentPos;
        const speed = diff * 0.25;
        currentPos = newPos;
        // kvSloganLeftLooping.timeScale(1 + speed);
        // kvSloganRightLooping.timeScale(1 + speed);
        NWsloganLeftLooping.timeScale(1 + speed);
        NWsloganRightLooping.timeScale(1 + speed);
        requestAnimationFrame(callDistort);
      };
      callDistort();

      const newWayListItem = document.querySelectorAll('.newWayList .listItem');
      newWayListItem.forEach((item)=>{
        const itemImg = item.querySelector('img');
        gsap.to(itemImg, {
          y: '-25%',
          ease: Linear.easeNone,
          scrollTrigger: {
            trigger: item,
            invalidateOnRefresh: true,
            // pin: true,
            scrub: true,
            start: "-=" + window.innerHeight * 0.5 + " top",
            end: () => "+=" + window.innerHeight * 1.2,
            // markers: true,
          }
        });
      });



      // Vision
      const sdgList = document.querySelector('.sdgList');
      const sdgListItems = sdgList.querySelectorAll('.listItem');

      const sdgListRange = () => {
        if (window.innerWidth > 959) {
          return window.innerWidth - sdgListItems[0].offsetWidth * (sdgListItems.length + 2);
        } else {
          return window.innerWidth - sdgListItems[0].offsetWidth * (sdgListItems.length + 1.2);
        }
      }

      sdgList.style.height = sdgListItems[0].offsetHeight + 'px';

      gsap.to('.sdgList', {
        x: (sdgListRange()) + "px",
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: '.sdgListWrap',
          invalidateOnRefresh: true,
          pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          // markers: true,
        }
      });

      

      // Creative Power
      const photoRowLeftLoop = document.querySelector(".photoRowLeftLoop");
      const photoRowLeftLoopList = photoRowLeftLoop.querySelectorAll(".photoRowList");
      photoRowLeftLoopList.forEach(function(el) {
        const rowLooping = new TimelineMax({ repeat: -1 });
        rowLooping.staggerFromTo(
          el,
          24,
          { xPercent: -100, ease: Linear.easeNone },
          { xPercent: 0, ease: Linear.easeNone }
        );
        const Move = () => rowLooping.timeScale(1);
        const Slow = () => rowLooping.timeScale(.3);
        photoRowLeftLoop.addEventListener("mouseenter", Slow);
        photoRowLeftLoop.addEventListener("mouseleave", Move);
        photoRowLeftLoop.addEventListener("touchstart", Slow);
        photoRowLeftLoop.addEventListener("touchend", Move);
      });

      const photoRowRightLoop = document.querySelector(".photoRowRightLoop");
      const photoRowRightLoopList = photoRowRightLoop.querySelectorAll(".photoRowList");
      photoRowRightLoopList.forEach(function(el) {
        const rowLooping = new TimelineMax({ repeat: -1 });
        rowLooping.staggerFromTo(
          el,
          24,
          { xPercent: 0, ease: Linear.easeNone },
          { xPercent: -100, ease: Linear.easeNone }
        );
        const Move = () => rowLooping.timeScale(1);
        const Slow = () => rowLooping.timeScale(.3);
        photoRowRightLoop.addEventListener("mouseenter", Slow);
        photoRowRightLoop.addEventListener("mouseleave", Move);
        photoRowRightLoop.addEventListener("touchstart", Slow);
        photoRowRightLoop.addEventListener("touchend", Move);
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

  }, [loadState])

  const a = ["0", "0", "0", "0", "0"];

  const break1Ref = useRef()
  const break2Ref = useRef()
  const break3Ref = useRef()
  const newWay1Ref = useRef()
  const newWay2Ref = useRef()
  const newWay3Ref = useRef()
  const newWay4Ref = useRef()
  const newWay5Ref = useRef()
  useEffect(() => {
    useStore.setState({ 
      break1Ref, break2Ref, break3Ref,
      newWay1Ref, newWay2Ref, newWay3Ref, newWay4Ref, newWay5Ref,
    })
  }, [])


  return (
    <div className="relative wrap w-screen overflow-x-hidden" ref={ref}>
      <nav className="nav"></nav>

        <div className={`coverVideo fixed top-0 left-0 z-100 w-screen h-screen duration-1000 ease-expo ${videoState == 'ends' ? 'opacity-0 pointer-events-none bg-kv-1':'bg-kv-2'}`}>
          <div className="videoCover relative w-full h-screen z-60">

          <div className="thumbanil"></div>
          
          <div className="coverLogo opacity-0">
            <div className="absolute top-2 left-0 w-full text-center text-white text-base font-inner font-semibold tracking-wider pointer-events-none">
              <Odometer value={yearValue} duration={8000} format="d" theme="default" />
            </div>
            
            <div className="coverLogo opacity-0">
              <div className="absolute top-2 left-0 w-full text-center text-white text-base font-inner font-semibold tracking-wider pointer-events-none">
                <Odometer value={yearValue} duration={8000} format="d" theme="default" />
              </div>
              
              <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ${videoState != 'ready' ? 'opacity-0 pointer-events-none':''}`}>
                <div className="flex items-center mt-16 mb-4 md:mt-20 xl:mt-24 md:mb-8 xl:mb-12 md:scale-125 xl:scale-150">
                  <div className="w-20 h-28 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo_jut35_icon_white})`}}></div>
                  <div className="ml-4 text-white text-5xl inline-flex">
                    <div className="font-extrabold tracking-wide">忠泰</div>
                    <div className="countNumber ml-1 font-medium font-inner tracking-wider" style={{transform: 'translateY(-5px)'}}>
                      <Odometer value={coverLogoValue} duration={8000} format="d" theme="default" />
                    </div>
                    {/* <div className="countNumber ml-1 font-medium font-inner" data-start="1" data-end="35" data-speed="2">1</div> */}
                  </div>
                </div>
                <div className="coverStartButton flex items-center justify-center opacity-0 scale-75">
                  <div className="text-white text-base text-center font-inner font-medium border-2 border-white border-solid px-4 py-1 cursor-pointer duration-800 ease-expo opacity-80 hover:opacity-100">Start JUT 35</div>
                </div>
              </div>
              <div className="coverStartButton flex items-center justify-center opacity-0">
                <div className="text-white text-base text-center font-inner font-medium border-2 border-white border-solid px-4 py-1 cursor-pointer hover:scale-110 duration-1000 ease-expo">Start JUT 35</div>
              </div>
            </div>

          <div className={`videoFrame absolute top-0 left-0 w-full h-full z-70 flex items-center justify-center ease-expo duration-2000 delay-500 bg-black ${videoState == 'start' || videoState == 'play' || videoState == 'pause' ? '':'pointer-events-none opacity-0'}`}>
            {/* <video autoPlay loop muted playsInline preload="auto" className="video w-full aspect-16/9"> */}
            <video preload="auto" className="video w-full aspect-16/9">
              <source src={video} type="video/mp4" />
            </video>
            <div className="videoProgress absolute bottom-4 z-0 w-full px-4 mix-blend-difference">
              <div className="bar bg-white/70 ease-linear duration-[1000ms]" style={{height: '1px', width: videoCurrentState}}></div>
              <div className="w-full bg-white/30" style={{height: '1px', transform: 'translateY(-1px)'}}></div>
            </div>
            <div className="skipVideoButton absolute bottom-9 z-10 flex items-center justify-center scale-90 ease-out duration-1000 opacity-50 hover:opacity-100">
              <div className="text-white text-sm text-center font-inner font-normal border border-white border-solid bg-black/20 backdrop-blur-sm px-3 py-1 cursor-pointer">SKIP</div>
            </div>
          </div>
        </div>

        <div className={`videoFrame absolute top-0 left-0 w-full h-full z-70 flex items-center justify-center ease-out duration-1000 bg-black ${videoState == 'start' || videoState == 'play' || videoState == 'pause' ? '':'pointer-events-none opacity-0'}`}>
          {/* <video autoPlay loop muted playsInline preload="auto" className="video w-full aspect-16/9"> */}
          <video preload="auto" className="video w-full aspect-16/9">
            <source src={video} type="video/mp4" />
          </video>
          <div className="videoProgress absolute bottom-4 z-0 w-full px-4 mix-blend-difference">
            <div className="bar bg-white/70 ease-linear duration-[1000ms]" style={{height: '1px', width: videoCurrentState}}></div>
            <div className="w-full bg-white/30" style={{height: '1px', transform: 'translateY(-1px)'}}></div>
          </div>
          <div className="skipVideoButton absolute bottom-9 z-10 flex items-center justify-center scale-90 ease-out duration-1000 opacity-50 hover:opacity-100">
            <div className="text-white text-sm text-center font-inner font-normal border border-white border-solid bg-black/50 backdrop-blur-sm px-3 py-1 cursor-pointer">SKIP</div>
          </div>
        </div>
      </div>

      {/* <div className="loadCover fixed top-0 left-0 right-0 bottom-0 z-100 w-screen h-screen pointer-events-none">
        <div className="mainLogo absolute top-0 left-0 right-0 bottom-0 z-30 mx-auto w-4/5 md:w-1/2 h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo_jut35_white})`}}></div>
        <div className="bg absolute top-0 left-0 right-0 bottom-0 z-20 w-full h-full bg-kv-1"></div>
      </div> */}

      <section className="hero relative h-screen flex flex-wrap flex-col">
        <div className="kvLeft relative pre-hero w-screen h-screen bg-kv-1 overflow-hidden scale-x-105 origin-top-left">
          <div className="kvLeftInner w-full h-full block opacity-0 translate-y-12">
            <Scene1Left />
          </div>
          <div className="sloganTop absolute top-0 left-0 z-10 w-full h-screen -bg-over-half bg-over-quarter md:bg-contain bg-repeat-x -bg-no-repeat bg-left-top scale-x-95 origin-top-left pointer-events-none opacity-0 -translate-y-12" style={{backgroundImage: `url(${slogan_top})`}}></div>
        </div>
        <div className="kvRight relative pre-hero w-screen h-screen bg-kv-2 overflow-hidden" style={{clipPath: "polygon(5% 0, 100% 0%, 100% 100%, 0% 100%)"}}>
          <div className="kvRightInner w-full h-full block" style={{transform: "translate(-50%, 0%)"}}>
            <Scene1Right />
          </div>
          <div className="sloganBottom absolute top-0 left-0 z-10 w-full h-screen -bg-over-half bg-over-quarter md:bg-contain bg-repeat-x bg-left-bottom translate-y-1 pointer-events-none" style={{backgroundImage: `url(${slogan_bottom})`}}></div>
        </div>
        <div className="mainLogo absolute top-0 left-0 right-0 bottom-0 z-30 mx-auto w-4/5 md:w-1/2 h-full bg-contain bg-no-repeat bg-center opacity-0 scale-90" style={{backgroundImage: `url(${logo_jut35_white})`}}></div>
      </section>
      
      <BackgroundMans />

      <section className="relative intro">
        <div className="bg-kv-2 py-32">

          <div className="container mx-auto">
            <div className="titleGruop fadeIn mb-32 text-gray-dark md:mb-48">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">The JUT Way</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">忠泰之道</div>
            </div>
            <div className="space-y-32">
          

              <div className="relative fadeIn md:flex">
                <div className="relative z-10 md:basis-1/2">
                  <img src={`${logo_jutgroup_white}`} className="mx-auto w-3/5 -h-full max-w-none md:w-2/4 md:ml-32" />
                </div>
                <div className="relative z-10 mt-12 md:basis-1/2 md:mt-0">
                  <div className="article_normal">
                    <p>忠泰集團的標誌以「⼈、樹、家」意象組成，藍綠兩⾊代表天空與陸地，象徵忠泰以建築營造事業立⾜天地之間。集團成立初期，懷抱「忠於建築　泰然求新」的經營理念，至今⼀直秉持初衷屹立不搖。而忠泰的英⽂名字「JUT」，來自初創時訂立的三⼤核⼼價值：「Justice」（公正）、「Union」（團結）、「Technique」（技術）取其首個字母而得名，「JUT」字義上有尖銳、突出的意思，寓意忠泰永遠走在時代尖端，成為台灣建造產業的領航企業。</p>
                  </div>
                </div>
                <div className="groupIconBg absolute z-0 top-0 left-0 w-full h-full opacity-5">
                  <img src={`${logo_jutgroup_icon_black}`} className="ml-auto -mr-12 mt-20 w-4/5 md:w-2/5 md:-mr-24 md:-mt-24 xl:w-2/5 max-w-none" />
                </div>
              </div>

              <div className="relative fadeIn md:flex">
                <div className="relative z-10 md:basis-1/2">
                  <img src={`${logo_jut35_s_white}`} className="mx-auto w-3/5 max-w-none md:w-2/5 md:ml-32" />
                </div>
                <div className="relative z-10 mt-12 md:basis-1/2 md:mt-0">
                  <div className="article_normal">
                    <p>我們期許以「A Better Tomorrow」的企業價值，創造一個平行於台北的平行城市、以忠泰事業系統所築構的生態體系，能獨立於城市傲然而生，同時又與原屬地共生共長，迎接每一個美好的明天。</p>
                    <p>35週年標誌呈階梯狀的意象，忠泰集團期盼以平行城市創造者之姿，藉由階梯連結都市開發之點線面，既深且廣地拓展忠泰的城市版圖。</p>
                    <h5>「三五成群 破浪前行」</h5>
                    <p>忠泰集團自創立至今所建立的一切，均有賴集團裡每一位夥伴的努力與堅持。古語有話：「三十而立，四十不惑」，屆而立與不惑之間，時代正處在最變幻莫測之際，集團希望「三五成群」即能凝聚成堅定的力量，臨危而不亂，穩中可求勝，大家都不忘人與人、社會、環境之間的緊密連繫，懷抱共好、創新、精益求精的態度，成就美好明天。</p>
                  </div>
                </div>
                <div className="mainIconBg absolute z-0 top-0 left-0 w-full h-full opacity-5">
                  <img src={`${logo_jut35_icon_black}`} className="mr-auto -ml-12 mt-20 w-4/5 md:w-2/5 md:-ml-24 md:mt-20 xl:w-2/5 max-w-none" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="sectionBreak relative z-20" ref={break1Ref}>
        <div className="bg-kv-2">
          <div className="scale-125 origin-center -rotate-6 translate-y-16">
            {/* <div className="upper relative z-0 w-screen h-32 bg-kv-2"></div> */}
            <div className="midde relative z-10 w-screen h-32 -rotate-6 md:-rotate-3 translate-y-16 bg-gradient-to-r from-gray-dark opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-72 bg-kv-3"></div>
          </div>
        </div>
      </div>
      
      <section className="newWay relative z-30">
        <div className="bg-kv-3 py-32">

          <div className="sloganGroup absolute top-0 left-0 z-0 w-screen h-screen opacity-0 pointer-events-none">
            <div className="sloganTop absolute top-0 left-0 w-full h-screen bg-over-half md:bg-over-quarter bg-repeat-x bg-left-top opacity-0" style={{backgroundImage: `url(${slogan_top_white})`}}></div>
            <div className="sloganBottom absolute bottom-0 left-0 w-full h-screen bg-over-half md:bg-over-quarter bg-repeat-x bg-left-bottom opacity-0" style={{backgroundImage: `url(${slogan_bottom_white})`}}></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="titleGruop fadeIn -mt-24 mb-40 text-gray-dark md:-mt-40 md:mb-48">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">New Way</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">探索新航向</div>
            </div>
            <div className="newWayList space-y-40 md:space-y-60">

              <div className="listItem fadeIn ml-8 md:ml-48" ref={newWay1Ref}>
                <div className="item_photo overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] object-cover scale-125 origin-top bg-white" />
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      忠泰建設與義泰建設<br />雙品牌發展策略
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">秉承忠泰集團始創人李忠義董事長之名，「忠泰建設」與「義泰建設」將以雙品牌策略發展，並駕齊驅，共同建造平行於台北的明日之城。</p>
                  </div>
                </div>
              </div>

              <div className="listItem fadeIn mr-8 md:mr-32" ref={newWay2Ref}>
                <div className="item_photo overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] object-cover scale-125 origin-top bg-white" />
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      首度跨足國際頂級商辦市場
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">以體驗為首開封充滿樂趣的零售之旅。<br />我們正在創造一種與顧客深層交流的零售體驗。</p>
                  </div>
                </div>
              </div>

              <div className="listItem fadeIn ml-8 md:ml-48" ref={newWay3Ref}>
                <div className="item_photo overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] object-cover scale-125 origin-top bg-white" />
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      拓展生活版圖<br />首度公開外縣市造鎮藍圖
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">以美學之姿探索運動之於日常的實踐。<br  />我們正在實踐一種獨樹一幟的城市運動。</p>
                  </div>
                </div>
              </div>

              <div className="listItem fadeIn mr-8 md:mr-48" ref={newWay4Ref}>
                <div className="item_photo overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] object-cover scale-125 origin-top bg-white" />
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      首座零售商場<br />蓄勢待發
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">以體驗為首開封充滿樂趣的零售之旅。<br/>我們正在創造一種與顧客深層交流的零售體驗。</p>
                  </div>
                </div>
              </div>

              <div className="listItem fadeIn ml-8 md:mx-24" ref={newWay5Ref}>
                <div className="item_photo overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] object-cover scale-125 origin-top bg-white" />
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      全城焦點<br />安藤忠雄特展五月登場
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">以美學之姿探索運動之於日常的實踐。<br/>我們正在實踐一種獨樹一幟的城市運動。</p>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* <div className=""></div> */}
        </div>
      </section>

      <div className="sectionBreak relative z-10" ref={break2Ref}>
        <div className="bg-kv-3">
          <div className="scale-125 origin-center rotate-6 translate-y-16 md:translate-y-32">
            <div className="midde relative z-10 w-screen h-32 rotate-12 md:rotate-3 translate-y-16 bg-gradient-to-r from-white opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-72 bg-kv-1"></div>
          </div>
        </div>
      </div>

      <section className="vision relative z-20">
        <div className="bg-kv-1 py-32">
          <div className="container mx-auto">
            <div className="titleGruop fadeIn -mt-40 mb-12 text-gray-dark md:-mt-48 md:mb-24">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">Vision</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">明日倡議</div>
            </div>
            <div className="video fadeIn aspect-video -mr-6 md:-mr-40 xl:-mr-48 2xl:mr-0">
              {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/8BbBGLUzjaA" title="JUT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>
            <div className="itemTitle fadeIn mt-8 md:flex">
              <div className="title md:basis-1/2">
                <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                  在建築之上，我們構築一座富有生命力與創造力的平行城市。
                </h2>
              </div>                  
              <div className="summary mt-4 article_normal md:mt-0 md:ml-20 md:basis-1/2">
                <p>忠泰集團從建築出發到生活風格的倡議，廣泛觸及到個人、城市與整體環境，我們深知在建築這個載體之外，更重要的是生活在載體之上的人們以及關係的串連，唯有生命與生活的灌溉，城市得以生生不息以及多樣盎然。</p>
                <p>關注於未來的建構，我們在乎每個人對生活的想望，希望在多個面向提出更好的生活方案：從個體出發，我們提出對居住與工作環境的重組，來改變人們對於空間關係的思考；對於城市的規劃，我們把人們的需求擺在第一位，探討城市宜居性等議題；而對於環境，我們著眼永續發展，提出環友善環境與社會的方案來進入可持續性的未來發展。</p>
                <p>在建築之上，忠泰是生活的園丁，澆灌、照護著這座百花齊放的平行城市。</p>
              </div>
            </div>

            <div className="titleGruop fadeIn mt-52 mb-12 text-gray-dark -md:-mt-48 md:mb-24">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">VISION 2030</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">遠望一個更美好的明天</div>
            </div>          
            <div className="summary fadeIn mt-4 article_normal md:mt-0 md:ml-auto md:w-3/4">
              <p>忠泰集團從建築出發到生活風格的倡議，廣泛觸及到個人、城市與整體環境，我們深知在建築這個載體之外，更重要的是生活在載體之上的人們以及關係的串連，唯有生命與生活的灌溉，城市得以生生不息以及多樣盎然。</p>
              <p>關注於未來的建構，我們在乎每個人對生活的想望，希望在多個面向提出更好的生活方案：從個體出發，我們提出對居住與工作環境的重組，來改變人們對於空間關係的思考；對於城市的規劃，我們把人們的需求擺在第一位，探討城市宜居性等議題；而對於環境，我們著眼永續發展，提出環友善環境與社會的方案來進入可持續性的未來發展。</p>
              <p>在建築之上，忠泰是生活的園丁，澆灌、照護著這座百花齊放的平行城市。</p>
            </div>
            <div className="sdgListWrap mt-20 pt-6 ml-8 md:ml-0 md:mt-24 md:pt-8 xl:pt-20">
              <div className="sdgList flex flex-wrap flex-col">
                <div className="listItem fadeIn delay-100 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-8 article_light">
                    <h3>環境永續</h3>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem fadeIn delay-200 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-8 article_light">
                    <h3>環境永續</h3>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem fadeIn delay-300 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-8 article_light">
                    <h3>環境永續</h3>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem fadeIn delay-500 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-8 article_light">
                    <h3>環境永續</h3>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem fadeIn delay-500 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-8 article_light">
                    <h3>環境永續</h3>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>            
      </section>

      <div className="sectionBreak relative z-30" style={{ transform: 'translate3d(0, 0, -1px)' }} ref={break3Ref}>
        <div className="bg-kv-1">
          <div className="scale-125 origin-center -rotate-6 translate-y-12">
            <div className="midde relative z-10 w-screen h-32 -rotate-6 md:-rotate-3 translate-y-16 bg-gradient-to-r from-white opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-72 bg-kv-2"></div>
          </div>
        </div>
      </div>

      <section className="creative relative z-40" 
      // style={{ transformStyle: 'preserve-3d' }}
      >
        {/* <div className="absolute left-0 top-0 right-0 bottom-0 bg-kv-2" style={{ transform: 'translate3d(0, 0, -1px)' }} /> */}

        <div className="bg-kv-2 py-32">
          <div className="container mx-auto fadeIn">
            <div className="-mt-40 mb-12 text-center md:text-left md:-mt-48 md:mb-24 md:flex md:justify-between md:items-end">
              <div className="md:basis-1/2">
                <div className="titleGruop text-white">
                  <div className="en font-inner font-bold text-8xl md:text-9xl">100</div>
                  <div className="zh mt-2 text-3xl font-inner font-bold md:text-5xl">Creative Power</div>
                </div>
              </div>
              <div className="md:basis-1/3 mt-8">
                <p className="text-white text-lg">為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業。</p>
              </div>
            </div>
          </div>

          <div className="photoRowWrap fadeIn w-screen overflow-x-hidden space-y-8 md:space-y-10">
            <div className="photoRowLeftLoop flex">
              <div className="photoRowList flex whitespace-nowrap">
                {a.map((k, i) => (
                  <div key={`row-1-${i}`} className="listItem relative mr-8 md:mr-12">
                    <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                      <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                      <div className="name text-2xl font-medium tracking-wider">李彥良</div>
                      <div className="title mt-2 text-sm font-medium tracking-wider">忠泰集團副董事長</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="photoRowList flex whitespace-nowrap">
                {a.map((k, i) => (
                  <div key={`row-2-${i}`} className="listItem relative mr-8 md:mr-12">
                    <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                      <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                      <div className="name text-2xl font-medium tracking-wider">李彥良</div>
                      <div className="title mt-2 text-sm font-medium tracking-wider">忠泰集團副董事長</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="photoRowRightLoop flex">
              <div className="photoRowList flex whitespace-nowrap">
                {a.map((k, i) => (
                  <div key={`row-3-${i}`} className="listItem relative mr-8 md:mr-12">
                    <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                      <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                      <div className="name text-2xl font-medium tracking-wider">李彥良</div>
                      <div className="title mt-2 text-sm font-medium tracking-wider">忠泰集團副董事長</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="photoRowList flex whitespace-nowrap">
                {a.map((k, i) => (
                  <div key={`row-4-${i}`} className="listItem relative mr-8 md:mr-12">
                    <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                      <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                      <div className="name text-2xl font-medium tracking-wider">李彥良</div>
                      <div className="title mt-2 text-sm font-medium tracking-wider">忠泰集團副董事長</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <section className="footer"></section> */}
      </div>
    </div>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage