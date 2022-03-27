import { forwardRef, useEffect } from "react"
import dynamic from 'next/dynamic'
import CoverVideo from './CoverVideo'
import Hero from './Hero'
import MainContent from './MainContent'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const BackgroundMans = dynamic(() => import('@components/canvas/BackgroundMans'), { ssr: false })

const IndexPage = forwardRef((props, ref) => {

// <<<<<<< HEAD
// =======
//   const [loadState, setLoadState] = useState()
//   const [windowWidth, setWindowWidth] = useState()

//   const [coverLogoValue, setCoverLogoValue] = useState(0)
//   const [yearValue, setYearValue] = useState(0)
//   const [videoCurrentState, setVideoCurrentState] = useState(0)
//   // const [videoState, setVideoState] = useState('ends')
//   const [videoState, setVideoState] = useState('ready')

//   useEffect(() => {  
//     window.addEventListener('resize', resizing);
//     resizing();
//     function resizing(){
//       setWindowWidth(window.innerWidth);
//     }
//   }, [windowWidth]);

//   useEffect(() => {

//     const hScreen = document.querySelectorAll('.h-screen');
//     hScreen.forEach((element)=>{
//       element.style.height = window.innerHeight + 'px';
//     });

//     setCoverLogoValue(20);
//     setYearValue(1987);
//     setTimeout(()=>{
//       setCoverLogoValue(35);
//       setYearValue(2022);
//     }, 500);

//     gsap.to('.coverLogo', 1, {
//       opacity: 1,
//       ease: Expo.easeIn,
//       // delay: 1,
//       onComplete: () => {}
//     });

//     gsap.to('.coverStartButton', 1, {
//       opacity: 1,
//       scale: 1,
//       ease: Expo.easeIn,
//       delay: 1,
//       onComplete: () => {
//         // console.log(loadState);
//         setTimeout(()=>{
//           setLoadState(true);
//         }, 1000);
//       }
//     });

//     const coverStartButton = document.querySelector(".coverStartButton");
//     const coverVideo = document.querySelector(".coverVideo");
//     const videoFrame = coverVideo.querySelector(".videoFrame");
//     const video = videoFrame.querySelector(".video");
//     const skipVideoButton = videoFrame.querySelector(".skipVideoButton");

//     coverStartButton.addEventListener("click", startPlayVideo, false);
//     function startPlayVideo(){
//       setVideoState('start');
//       handlePlayButton();
//     }

//     skipVideoButton.addEventListener("click", skipVideo, false);
//     function skipVideo(){
//       setTimeout(()=>{
//         setVideoState('ends');
//       }, 500);
//       video.pause();
//     }

//     video.addEventListener("click", handlePlayButton, false);
//     async function playVideo() {
//       try {
//         await video.play();
//         // coverVideo.classList.toggle("playing");
//         var i = setInterval(function() {
//           if (video.readyState > 0) {
//             // modal_video minutes = parseInt(video.duration / 60, 10);
//             // var seconds = video.duration % 60;
//             var duration = video.duration;
//             var currentTime = video.currentTime;
//             var currentPercentage = Math.floor((currentTime / duration) * 100);
//             // console.log(currentPercentage);
            
//             setVideoCurrentState(currentPercentage + "%");

//             if (parseInt(duration) - parseInt(currentTime) == 0) {
//               clearInterval(i);
//               // coverVideo.classList.remove("playing");
//               setVideoState('ends');
//               // setTimeout(()=>{}, 1000);
//             }
//           }
//         }, 100);
//       } catch (err) {}
//     }

//     function handlePlayButton() {
//       if (video.paused) {
//         playVideo();
//         setVideoState('play');
//       } else {
//         video.pause();
//         setVideoState('pause');
//         // coverVideo.classList.remove("playing");
//       }
//     }

//   }, []);

//   useEffect(() => {  
//     if (videoState == 'ends') {
//       gsap.to('.kvLeft .kvLeftInner', 4, {
//         opacity: 1,
//         y: 0,
//         ease: Expo.easeOut,
//         delay: .6
//       });
//       gsap.to('.kvLeft .sloganTop', 4, {
//         opacity: 1,
//         y: 0,
//         ease: Expo.easeOut,
//         delay: .6
//       });
//       gsap.to('.hero .mainLogo', 3, {
//         opacity: 1,
//         scale: 1,
//         ease: Expo.easeOut,
//         delay: 1.5
//       });
//     }
//   }, [videoState]);

// >>>>>>> main
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
  }, [])

  return (
    <div className="relative wrap w-screen overflow-x-hidden" ref={ref}>
      <nav className="nav"></nav>

      <CoverVideo />

      {/* <div className="loadCover fixed top-0 left-0 right-0 bottom-0 z-100 w-screen h-screen pointer-events-none">
        <div className="mainLogo absolute top-0 left-0 right-0 bottom-0 z-30 mx-auto w-4/5 md:w-1/2 h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo_jut35_white})`}}></div>
        <div className="bg absolute top-0 left-0 right-0 bottom-0 z-20 w-full h-full bg-kv-1"></div>
      </div> */}

      <Hero />
      
      <BackgroundMans />

      <MainContent />
    </div>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage