import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import dynamic from 'next/dynamic'
import useStore from '@helpers/store'
import { randomItem } from '@helpers/utils'

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
} from "gsap"

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0
})

const video = '/video.mp4'
const logo_jut35_icon_white = '/logo_jut35_icon_white.svg'

let interval = null
let fontInterval = null

const coverColor = ['bg-kv-1', 'bg-kv-2', 'bg-kv-3', 'bg-kv-1', 'bg-kv-2', 'bg-kv-3'];

const CoverVideo = props => {
  const [fontState, setFontState] = useState(false)
  const [loadState, setLoadState] = useState(false)
  const [coverLogoValue, setCoverLogoValue] = useState(0)
  const [yearValue, setYearValue] = useState(0)
  const [videoState, setVideoState] = useState('ready')
  const progessRef = useRef()

  useEffect(() => {
    
    const logoIconWrap = document.querySelector('.logoIconWrap'),
          logoIcon = logoIconWrap.querySelector('.logoIcon');

    setTimeout(()=>{
      logoIcon.style.transform = "translate(" + (logoIconWrap.offsetWidth - logoIcon.offsetWidth) * .5 + 'px' + ", 0px)";
    }, 300);

    setCoverLogoValue(10);
    setYearValue(1987);

    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoadState(true);
      }, 2500);
    } else {
      window.addEventListener('load', ()=>{
        setLoadState(true);
      });
    }

    // if (typeof window !== `undefined`) {
    //   window.addEventListener('load', ()=>{
    //     setLoadState(true);
    //   });
    // }
    // window.addEventListener('load', ()=>{
    //   setLoadState(true);
    // });

    gsap.to('.coverLogo', 1, {
      opacity: 1,
      ease: Expo.easeInOut,
      delay: .5
    });

    if (loadState == true){
      // gsap.to('.coverLogo', 1, {
      //   opacity: 1,
      //   ease: Expo.easeInOut,
      //   delay: .5,
      //   onStart: () => {
      //   }
      // });

      document.querySelector('.logoIcon').classList.remove('fadeLoop');

      gsap.to('.logoIcon', 1, {
        x: '0px',
        ease: Expo.easeInOut,
        // delay: .2,
        // className: '-=fadeLoop',
        onStart: () => {
          setCoverLogoValue(35);
          setYearValue(2022);  
        }
      });

      gsap.to('.logoText', 1, {
        opacity: 1,
        ease: Expo.easeInOut,
        delay: .1
      });
      gsap.to('.coverStartButton', 1, {
        opacity: 1,
        scale: 1,
        ease: Expo.easeInOut,
        delay: .2,
        onComplete: () => {
        }
      });

    }

  }, [loadState]);

  useEffect(() => {

    const innerHeight = () => {
      document.querySelectorAll('.innerHeight').forEach((element)=>{
        element.style.height = window.innerHeight + 'px';
      });
    }
    innerHeight();
    window.addEventListener('resize', ()=>{
      innerHeight();
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
      clearInterval(interval)

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
        interval = setInterval(function() {
          // console.log('interval called')
          if (video.readyState > 0) {
            // modal_video minutes = parseInt(video.duration / 60, 10);
            // var seconds = video.duration % 60;
            var duration = video.duration;
            var currentTime = video.currentTime;
            var currentPercentage = Math.floor((currentTime / duration) * 100);
            // console.log(currentPercentage);
            
            progessRef.current && progessRef.current.setVideoCurrentState(currentPercentage + "%");

            if (parseInt(duration) - parseInt(currentTime) == 0) {
              clearInterval(interval);
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
      useStore.setState({ videoEnded: true })
      
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
        delay: 1.5,
      });
      // setTimeout(() => {
      //   window.scrollTo(0, 200);
      // }, 10000);
    }
  }, [videoState]);

  return (
    
    <div className={`coverVideo innerHeight fixed top-0 left-0 z-100 w-screen h-screen duration-1000 ease-expo ${videoState == 'ends' ? 'opacity-0 pointer-events-none bg-kv-1' : randomItem(coverColor)}`}>
      <div className="videoCover relative w-full h-full z-60">

        <div className="thumbanil"></div>
        
        <div className="coverLogo opacity-0">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white text-5xl scale-[5] md:scale-[9] xl:scale-[10] opacity-20 tracking-tighter font-inner font-semibold pointer-events-none">
            <Odometer value={yearValue} duration={32000} format="d" theme="default" />
          </div>
          
          <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ${videoState != 'ready' ? 'opacity-0 pointer-events-none':''}`}>
            <div className="logoIconWrap flex items-center mt-16 mb-4 md:mt-20 xl:mt-24 md:mb-8 xl:mb-12 md:scale-125 xl:scale-150">
              <div className="logoIcon inline-flex fadeLoop w-20 h-28 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo_jut35_icon_white})`}}></div>
              <div className="logoText pl-4 text-white text-5xl inline-flex opacity-0">
                <div className="font-extrabold tracking-wide">忠泰</div>
                <div className="countNumber ml-1 tracking-tight" style={{transform: 'translateY(-5px)'}}>
                  <Odometer value={coverLogoValue} duration={32000} format="d" theme="default" />
                </div>
                {/* <div className="countNumber ml-1 font-medium font-inner" data-start="1" data-end="35" data-speed="2">1</div> */}
              </div>
            </div>
            <div className="coverStartButton flex items-center justify-center opacity-0 scale-75">
              <div className="text-white text-base text-center font-inner font-medium border-2 border-white border-solid px-4 py-1 cursor-pointer duration-800 ease-expo opacity-80 hover:opacity-100">Start JUT 35</div>
            </div>
          </div>
        </div>


      </div>

      {/* <div className="loadProgress absolute top-0 left-0 right-0 mx-auto w-90 h-full --pointer-events-none fadeLoop">
        <div className="loadProgressText inline-block font-inner font-extrabold tracking-tight text-white/80 text-6xl origin-top-left">
          <Odometer value={yearValue} duration={20000} format="d" theme="default" />
        </div>
      </div> */}

      <div className={`videoFrame absolute top-0 left-0 w-full h-full z-70 flex items-center justify-center ease-expo duration-1000  bg-black ${videoState == 'start' || videoState == 'play' || videoState == 'pause' ? '':'pointer-events-none opacity-0'}`}>
        {/* <video autoPlay loop muted playsInline preload="auto" className="video w-full aspect-16/9"> */}
        <video preload="auto" className="video w-full aspect-16/9">
          <source src={video} type="video/mp4" />
        </video>
        
        <Progess ref={progessRef} />

        <div className="skipVideoButton absolute bottom-9 z-10 flex items-center justify-center scale-90 ease-out duration-1000 opacity-50 hover:opacity-100">
          <div className="text-white text-sm text-center font-inner font-normal border border-white border-solid bg-black/20 backdrop-blur-sm px-3 py-1 cursor-pointer">SKIP</div>
        </div>
      </div>
    </div>
  )
}

const Progess = forwardRef((props, ref) => {
  const [videoCurrentState, setVideoCurrentState] = useState(0)

  useImperativeHandle(ref, () => ({
    setVideoCurrentState(val) {
      setVideoCurrentState(val)
    }
  }))

  return (
    <div className="videoProgress absolute bottom-4 z-0 w-full px-4 mix-blend-difference">
      <div 
        className="bar bg-white/70 ease-linear duration-[1000ms]" 
        style={{height: '1px', width: videoCurrentState}}
      />
      <div 
        className="w-full bg-white/30" 
        style={{height: '1px', transform: 'translateY(-1px)'}} 
      />
    </div>
  )
})
Progess.displayName = 'Progess'

export default CoverVideo