import { useEffect, useRef, useState } from "react"
import useStore from '@helpers/store'
import Slider from "@farbenmeer/react-spring-slider"
import dynamic from 'next/dynamic'
import CreativePhotos from './CreativePhotos'

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

const logo_jut35_icon_black = '/logo_jut35_icon_black.svg'
const logo_jutgroup_icon_black = '/logo_jutgroup_icon_black.svg'
const logo_jut35_s_white = '/logo_jut35_s_white.svg'
const logo_jutgroup_white = '/logo_jutgroup_white.svg'
const logo_jut35_icon_white = '/logo_jut35_icon_white.svg'

const slogan_top_white = '/slogan_top_white.svg'
const slogan_bottom_white = '/slogan_bottom_white.svg'

// New Nay
const newway_1_1 = '/newway/1-1.jpg'
const newway_2_1 = '/newway/2-1.jpg'
const newway_2_2 = '/newway/2-2.jpg'
const newway_2_3 = '/newway/2-3.jpg'
const newway_2_4 = '/newway/2-4.jpg'
const newway_3_1 = '/newway/3-1.jpg'
const newway_4_1 = '/newway/4-1.jpg'
const newway_4_2 = '/newway/4-2.jpg'
const newway_4_3 = '/newway/4-3.jpg'
const newway_4_4 = '/newway/4-4.jpg'
const newway_4_5 = '/newway/4-5.jpg'
const newway_5_1 = '/newway/5-1.jpg'
const newway_5_2 = '/newway/5-2.jpg'

// Vision
const vision_1 = '/vision/1.jpg'
const vision_2 = '/vision/2.jpg'
const vision_3 = '/vision/3.jpg'
const vision_4 = '/vision/4.jpg'
const vision_5 = '/vision/5.jpg'
const vision_6 = '/vision/6.jpg'

const sdgs_1 = '/vision/sdgs/sdgs_1.svg'
const sdgs_2 = '/vision/sdgs/sdgs_2.svg'
const sdgs_3 = '/vision/sdgs/sdgs_3.svg'
const sdgs_4 = '/vision/sdgs/sdgs_4.svg'
const sdgs_5 = '/vision/sdgs/sdgs_5.svg'
const sdgs_6 = '/vision/sdgs/sdgs_6.svg'
const sdgs_7 = '/vision/sdgs/sdgs_7.svg'
const sdgs_8 = '/vision/sdgs/sdgs_8.svg'
const sdgs_9 = '/vision/sdgs/sdgs_9.svg'
const sdgs_10 = '/vision/sdgs/sdgs_10.svg'
const sdgs_11 = '/vision/sdgs/sdgs_11.svg'
const sdgs_12 = '/vision/sdgs/sdgs_12.svg'
const sdgs_13 = '/vision/sdgs/sdgs_13.svg'
const sdgs_14 = '/vision/sdgs/sdgs_14.svg'
const sdgs_15 = '/vision/sdgs/sdgs_15.svg'
const sdgs_16 = '/vision/sdgs/sdgs_16.svg'
const sdgs_17 = '/vision/sdgs/sdgs_17.svg'

const Scene1Left = dynamic(() => import('@components/canvas/sub-scenes/1_Left'), { ssr: false })
const Break1 = dynamic(() => import('@components/canvas/sub-scenes/Break1'), { ssr: false })
const Break2 = dynamic(() => import('@components/canvas/sub-scenes/Break2'), { ssr: false })
const Break3 = dynamic(() => import('@components/canvas/sub-scenes/Break3'), { ssr: false })
const AnimeMan1 = dynamic(() => import('@components/canvas/sub-scenes/AnimeMan1'), { ssr: false })
const AnimeMan2 = dynamic(() => import('@components/canvas/sub-scenes/AnimeMan2'), { ssr: false })
const AnimeMan3 = dynamic(() => import('@components/canvas/sub-scenes/AnimeMan3'), { ssr: false })
const AnimeMan4 = dynamic(() => import('@components/canvas/sub-scenes/AnimeMan4'), { ssr: false })
const AnimeMan5 = dynamic(() => import('@components/canvas/sub-scenes/AnimeMan5'), { ssr: false })


const MainContent = props => {
  const videoEnded = useStore(state => state.videoEnded)
  const creativeList = useStore(state => state.creativeList)
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {  
    window.addEventListener('resize', resizing);
    resizing();
    function resizing(){
      setWindowWidth(window.innerWidth);
    }
  }, [windowWidth])

  useEffect(() => {
    if (videoEnded == true) {
      
      // Intro
      gsap.to('.groupIconBg', {
        y: '-50vh',
        ease: "none",
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
        ease: "none",
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
        // position: 'fixed',
        opacity: 0.3,
        ease: "none",
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

      gsap.to('.newWay .sloganTop .sloganTopInner', {
        // position: 'fixed',
        opacity: 1,
        ease: "none",
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

      gsap.to('.newWay .sloganTop .sloganTopInner', {
        opacity: 0,
        ease: "none",
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

      gsap.to('.newWay .sloganBottom .sloganBottomInner', {
        position: 'fixed',
        opacity: 1,
        ease: "none",
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

      gsap.to('.newWay .sloganBottom .sloganBottomInner', {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: '.newWayList .listItem:nth-child(5)',
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

      // const NWsloganLeftLooping = new TimelineMax({ repeat: -1 });
      // NWsloganLeftLooping.staggerFromTo('.newWay .sloganTop', 40,
      //   { backgroundPositionX: 0, ease: Linear.easeNone },
      //   { backgroundPositionX: -(sloganLoopingRange() * 3) + 'px', ease: Linear.easeNone }
      // );

      // const NWsloganRightLooping = new TimelineMax({ repeat: -1 });
      // NWsloganRightLooping.staggerFromTo('.newWay .sloganBottom', 40,
      //   { backgroundPositionX: -(sloganLoopingRange() * 3) + 'px', ease: Linear.easeNone },
      //   { backgroundPositionX: 0, ease: Linear.easeNone }
      // );

      const NWsloganLeftLooping = new TimelineMax({ repeat: -1 });
      NWsloganLeftLooping.staggerFromTo('.newWay .sloganTop', 40,
        { x: '0%', ease: Linear.easeNone },
        { x: '-200%', ease: Linear.easeNone }
      );

      const NWsloganRightLooping = new TimelineMax({ repeat: -1 });
      NWsloganRightLooping.staggerFromTo('.newWay .sloganBottom', 40,
        { x: '-200%', ease: Linear.easeNone },
        { x: '0%', ease: Linear.easeNone }
      );

      let currentPos = window.pageYOffset;
      const callDistort = function() {
        const newPos = window.pageYOffset;
        const diff = newPos - currentPos;
        const speed = diff * 0.25;
        currentPos = newPos;
        // kvSloganLeftLooping.timeScale(1 + speed);
        // kvSloganRightLooping.timeScale(1 + speed);
        NWsloganLeftLooping.timeScale(1 + (speed < 0 ? '0' : speed));
        NWsloganRightLooping.timeScale(1 + (speed < 0 ? '0' : speed));
        requestAnimationFrame(callDistort);
      };
      callDistort();

      const newWayListItem = document.querySelectorAll('.newWayList .listItem .itemPhoto .photo');
      newWayListItem.forEach((item)=>{
        // const itemImg = item.querySelector('img');
        gsap.to(item, {
          y: '-10%',
          ease: "none",
          scrollTrigger: {
            trigger: item,
            invalidateOnRefresh: true,
            // pin: true,
            scrub: true,
            start: () => "-=" + window.innerHeight * 0.5 + " top",
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
        ease: "none",
        scrollTrigger: {
          trigger: '.sdgListWrap',
          invalidateOnRefresh: true,
          pin: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          // markers: true,
        }
      });

      // Footer
      gsap.to('.footerInner', {
        transform: "translate(0px, 0px)",
        ease: "none",
        onComplete: () => {
        },
        scrollTrigger: {
          trigger: '.footer',
          invalidateOnRefresh: true,
          scrub: true,
          start: "+=" + window.innerHeight * -.5 + " top",
          end: () => "+=" + window.innerHeight * .5,
        }
      });


      const footerLogoAnimate = function(ev) {
        const target = document.querySelector(".footerLogo");

        const evX = (ev == 'touchmove') ? ev.originalEvent.touches[0].clientX : ev.clientX;
        const evY = (ev == 'touchmove') ? ev.originalEvent.touches[0].clientY : ev.clientY;

        const sxPos = (evX / window.innerWidth * 50) * 0.8;
        const syPos = (evY / window.innerHeight * 50) * 0.8;

        gsap.to(target, 1, {
          css:{ "filter": "drop-shadow(" + Math.ceil(-sxPos) + "px " + Math.ceil(-syPos) + "px 16px rgba(0,0,0,.2))"},
          ease: Expo.easeOut
        });
      };
      
      window.addEventListener("touchstart", footerLogoAnimate);
      window.addEventListener("touchend", footerLogoAnimate);
      window.addEventListener("mousemove", footerLogoAnimate);
      window.addEventListener("mouseleave", footerLogoAnimate);

    }
  }, [videoEnded])

  // const a = ["0", "0", "0", "0", "0"];

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
    <>
      <section className="relative intro">
        <div className="bg-kv-2 pt-32 md:pb-24">

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
                    <p>忠泰集團的標誌以「⼈、樹、家」意象組成，藍綠兩⾊代表天空與陸地，象徵忠泰以建築營造事業立⾜天地之間。集團成立初期，懷抱「忠於建築　泰然求新」的經營理念，至今⼀直秉持初衷屹立不搖。而忠泰的英⽂名字「JUT」，來自初創時訂立的三⼤核⼼價值：「Justice」（公平）、「Union」（團結）、「Technique」（技術）取其首個字母而得名，「JUT」字義上有尖銳、突出的意思，寓意忠泰永遠走在時代尖端，成為台灣建造產業的領航企業。</p>
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
                  <img src={`${logo_jut35_icon_black}`} className="mr-auto -ml-12 mt-20 w-4/5 md:w-2/5 md:-ml-24 md:mt-8 xl:w-2/5 max-w-none" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-kv-2 w-full h-[50vh] absolute bottom-[-49vh] -z-10"></div>
      </section>

      <div className="sectionBreak relative z-20">
        <div className="absolute w-screen left-0 h-[35vh] md:h-[40vh] xl:h-[45vh]">
          <Break1 />
        </div>
       
        <div className="" style={{ transform: 'translate(0px, 14vh)' }}>
          <div className="scale-125 origin-center -rotate-6 translate-y-12 xl:translate-y-[7rem]">
            {/* <div className="upper relative z-0 w-screen h-32 bg-kv-2"></div> */}
            <div className="midde relative z-10 w-screen h-32 md:h-[14vh] -rotate-6 md:-rotate-[3.5deg] translate-y-16 bg-gradient-to-r from-gray-dark opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-[24vh] bg-kv-3 md:translate-y-4 xl:-translate-y-3"></div>
          </div>
        </div>
      </div>

      <section className="newWay relative top-4 z-20">
        <div className="relative z-20 pt-64 pb-32 md:pb-40">

          <div className="container mx-auto relative z-40">
            <div className="titleGruop fadeIn -mt-24 mb-40 text-gray-dark md:mb-48">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">New Way</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">探索最新航向 擘畫發展藍圖</div>
            </div>
            <div className="newWayList space-y-40 md:space-y-60">

              <div className="listItem relative fadeIn ml-8 md:ml-48">
                <div className="absolute" style={{ right: '2vw', top: 'calc(-30vw + 5.5vw)', width: '30vw', height: '30vw' }}>
                  <AnimeMan1 />
                </div>

                <div className="itemPhoto overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                  <img src={newway_1_1} alt="" className="photo will-change-auto aspect-[6/4] object-cover scale-110 origin-top bg-white" />
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

              <div className="listItem relative fadeIn mr-8 md:w-full md:mr-0">
                <div className="absolute" style={{ right: '4vw', top: 'calc(-30vw + 6vw)', width: '30vw', height: '30vw' }}>
                  <AnimeMan2 />
                </div>

                {windowWidth < 959 ?
                  <>
                    <div className="itemPhoto overflow-hidden aspect-[5/7] shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                      <Slider 
                        auto={6000}
                        hasArrows
                        arrowStyle={{ width: "20px", height: "20px", padding: "1px", borderColor: "rgba(255,255,255, .9)", borderWidth: "0px 2px 2px 0px" }}
                        hasBullets
                        bulletStyle={{ margin: "0 4px", width: "8px", height: "8px", backgroundColor: "rgba(255,255,255, .9)", border: "1px solid rgba(0,0,0, .2)" }}
                      >
                        <img src={newway_2_1} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                        <img src={newway_2_2} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                        <img src={newway_2_3} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                        <img src={newway_2_4} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                      </Slider>
                    </div>
                  </>
                :
                  <>
                    <div className="grid grid-cols-2 gap-x-24 gap-y-20">
                      <div className="itemPhoto fadeIn translate-x-12 overflow-hidden aspect-[5/7] shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                        <img src={newway_2_1} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                      </div>
                      <div className="itemPhoto fadeIn mt-16 translate-x-12 overflow-hidden aspect-[5/7] shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                        <img src={newway_2_2} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                      </div>
                      <div className="itemPhoto fadeIn overflow-hidden aspect-[5/7] shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                        <img src={newway_2_3} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                      </div>
                      <div className="itemPhoto fadeIn mt-16 overflow-hidden aspect-[5/7] shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                        <img src={newway_2_4} alt="" className="photo will-change-auto aspect-[5/7] object-cover scale-110 origin-top bg-white" />
                      </div>
                    </div>
                  </>
                }
                <div className="itemTitle fadeIn mt-8 md:flex">
                  <div className="title md:basis-1/2 md:ml-16">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      首度跨足國際頂級商辦市場
                    </h2>
                    <p className="mt-4 text-base font-inner font-normal text-gray-dark md:text-base">忠泰建設將首度開發頂級商辦市場，聯手安藤忠雄、MVRDV等國際大師，以匠心概念糅合當代設計，勢將打造台北新世代的黃金商業核心區。</p>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    {/* <p className="text-base font-inner font-normal text-gray-dark md:text-base">忠泰建設將首度開發頂級商辦市場，聯手安藤忠雄、MVRDV等國際大師，以匠心概念糅合當代設計，勢將打造台北新世代的黃金商業核心區。</p> */}
                  </div>
                </div>
              </div>

              <div className="listItem relative fadeIn ml-8 md:ml-48">
                <div className="absolute" style={{ left: 'calc(-30vw + 5vw)', top: '-13vw', width: '30vw', height: '30vw' }}>
                  <AnimeMan3 />
                </div>

                <div className="itemPhoto overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                  <img src={newway_3_1} alt="" className="photo will-change-auto aspect-[3/2] object-cover scale-110 origin-top bg-white" />
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      拓展生活版圖<br />首度公開外縣市造鎮藍圖
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">首個台北以外的大型造鎮項目即將展開，實踐永續生活社區的明日想像。</p>
                  </div>
                </div>
              </div>

              <div className="listItem relative fadeIn mr-8 md:mr-24">
                <div className="absolute" style={{ right: '-10vw', top: 'calc(-30vw + 6vw)', width: '30vw', height: '30vw' }}>
                  <AnimeMan4 />
                </div>

                <div className="itemPhoto overflow-hidden aspect-[8/5] shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                  <Slider 
                    auto={6000}
                    hasArrows
                    arrowStyle={{ width: "20px", height: "20px", padding: "1px", borderColor: "rgba(255,255,255, .9)", borderWidth: "0px 2px 2px 0px" }}
                    hasBullets
                    bulletStyle={{ margin: "0 4px", width: "8px", height: "8px", backgroundColor: "rgba(255,255,255, .9)", border: "1px solid rgba(0,0,0, .2)" }}
                  >
                    <img src={newway_4_1} alt="" className="photo will-change-auto aspect-[8/5] object-cover scale-110 origin-top bg-white" />
                    <img src={newway_4_2} alt="" className="photo will-change-auto aspect-[8/5] object-cover scale-110 origin-top bg-white" />
                    <img src={newway_4_3} alt="" className="photo will-change-auto aspect-[8/5] object-cover scale-110 origin-top bg-white" />
                    <img src={newway_4_4} alt="" className="photo will-change-auto aspect-[8/5] object-cover scale-110 origin-top bg-white" />
                    <img src={newway_4_5} alt="" className="photo will-change-auto aspect-[8/5] object-cover scale-110 origin-top bg-white" />
                  </Slider>
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      首座零售商場<br />蓄勢待發
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">位處台北大直高端消費聚落，忠泰集團首座商場「NOKE忠泰樂生活」即將於2022年第三季開幕，糅合自然(Nature)、原創(Originality)、知識(Knowledge)、活力(Energy) 於一身的零售場域，配備國際賽事標準規格之「極光冰場 Aurora Ice Rink」，以及蔦屋書店強勢加盟，勢將為品味人士敞開風格之門。</p>
                  </div>
                </div>
              </div>

              <div className="listItem relative fadeIn ml-8 md:mx-24">
                <div className="absolute" style={{ right: '4vw', top: 'calc(-30vw + 6vw)', width: '30vw', height: '30vw' }}>
                  <AnimeMan5 />
                </div>

                <div className="itemPhoto overflow-hidden shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[1vw_-1vw_0_0_rgba(0,0,0,0.2)]">
                  <img src={newway_5_2} alt="" className="photo will-change-auto aspect-[1/1] object-cover scale-110 origin-top bg-white" />
                </div>
                <div className="itemTitle mt-8 md:flex">
                  <div className="title md:basis-1/2">
                    <h2 className="text-3xl leading-snug font-bold text-gray-dark tracking-wide md:text-3xl md:leading-snug">
                      全城焦點<br />安藤忠雄特展五月登場
                    </h2>
                  </div>                  
                  <div className="summary mt-4 md:mt-0 md:basis-1/2">
                    <p className="text-base font-inner font-normal text-gray-dark md:text-base">《挑戰 - 安藤忠雄展》 全球巡展最終站首次來台展出，日本當代建築巨擘集半世紀的心血大成，將以 4 大主題 300 件展品精彩重現。</p>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>

        <div className="sloganGroup fixed top-0 left-0 z-10 w-full w-full innerHeight opacity-0 pointer-events-none will-change-scroll">

          <div className="sloganTop absolute top-0 left-0 w-full h-full will-change-transform">
            <div className="sloganTopInner relative w-full h-full block opacity-0">
              <div className="absolute top-0 left-0 w-full h-full bg-over-half md:bg-contain bg-repeat-x bg-left-top" style={{backgroundImage: `url(${slogan_top_white})`}}></div>
              <div className="absolute top-0 left-0 w-full h-full bg-over-half md:bg-contain bg-repeat-x bg-left-top" style={{transform: "translate(100%, 0%)", backgroundImage: `url(${slogan_top_white})`}}></div>
              <div className="absolute top-0 left-0 w-full h-full bg-over-half md:bg-contain bg-repeat-x bg-left-top" style={{transform: "translate(200%, 0%)", backgroundImage: `url(${slogan_top_white})`}}></div>
            </div>
          </div>
          <div className="sloganBottom absolute bottom-0 left-0 w-full h-full will-change-transform">
            <div className="sloganBottomInner relative w-full h-full block opacity-0">
              <div className="absolute bottom-0 left-0 w-full h-full bg-over-half md:bg-contain bg-repeat-x bg-left-bottom" style={{backgroundImage: `url(${slogan_bottom_white})`}}></div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-over-half md:bg-contain bg-repeat-x bg-left-bottom" style={{transform: "translate(100%, 0%)", backgroundImage: `url(${slogan_bottom_white})`}}></div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-over-half md:bg-contain bg-repeat-x bg-left-bottom" style={{transform: "translate(200%, 0%)", backgroundImage: `url(${slogan_bottom_white})`}}></div>
            </div>
          </div>

          {/* <div className="sloganBottom absolute bottom-0 left-0 w-full h-full bg-over-half md:bg-over-quarter bg-repeat-x bg-left-bottom will-change-auto opacity-0" style={{width: '300vw', backgroundImage: `url(${slogan_bottom_white})`}}></div> */}
        </div>

        <div className="bg-kv-3 w-full h-full absolute top-0 left-0 z-0" style={{clipPath: "polygon(0 1.5%, 100% 0%, 100% 100%, 0 100%)"}}></div>

        <div className="bg-kv-3 w-full h-[50vh] absolute bottom-[-49vh] -z-10"></div>
      </section>

      <div className="sectionBreak relative z-40">
        <div className="absolute w-screen left-0 h-[35vh] md:h-[40vh] xl:h-[45vh]">
          <Break2 />
        </div>

        <div className="translate-y-[8vh] md:translate-y-[3vh] xl:translate-y-[6vh]">
          <div className="scale-125 origin-center rotate-6 translate-y-16 md:translate-y-32">
            <div className="midde relative z-10 w-screen h-32 md:h-[14vh] rotate-[8deg] md:rotate-[4.5deg] translate-y-16 bg-gradient-to-r from-white opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-[24vh] bg-kv-1"></div>
          </div>
        </div>
      </div>

      <section className="vision relative top-12 z-40">
        <div className="relative z-10 pt-32 pb-24 md:pd-64">
          <div className="container mx-auto">
            <div className="titleGruop fadeIn -mt-20 mb-12 text-gray-dark md:-mt-24 md:mb-24">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">JUT VISION</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">明日倡議</div>
            </div>
            <div className="video fadeIn aspect-video bg-black/50 -mr-6 md:-mr-40 xl:-mr-48 2xl:mr-0">
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
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">忠泰永續願景</div>
            </div>          
            <div className="summary fadeIn mt-4 article_normal md:mt-0 md:ml-auto md:w-3/4">
              <p>對於 2030 年的到來，我們竭力在經濟活動與發展的同時，與生態環境和諧共存；我們重視與所有合作單位、投資者以及利害關係人之良好關係；我們持續追求高度可信、具透明度以及有效溝通的企業管理，也將逐步對外主動揭露更完整之永續發展資訊。</p>
              <p>透過 11 項 SDGs 作為目標來達成近十年的集團展望與期許，我們企圖實踐「宜居城市」、「環境永續」、「多元生活」、「管理績效」、「職場培力」、「文化藝術」六個面向的價值或能力。</p>
            </div>
            <div className="sdgListWrap mt-20 pt-6 ml-8 md:ml-0 md:mt-24 md:pt-8 xl:pt-20">
              <div className="sdgList flex flex-wrap flex-col">
                <div className="listItem fadeIn delay-100 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light">
                    <img src={vision_1} alt="宜居城市" className="aspect-2/3 object-cover" />
                  </div>
                  <div className="content mt-8 article_light xl:mt-16">
                    <h3>宜居城市</h3>
                    <p>我們重視建築與人、空間、環境之間的關係美學，以建造舒適、安全、宜居的社區以及城市為目標。</p>
                  </div>
                  <div className="listIcons mt-6 flex flex-wrap space-x-3 xl:space-x-4">
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_3})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_11})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_17})`}}></div>
                  </div>
                </div>
                <div className="listItem fadeIn delay-200 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light">
                    <img src={vision_2} alt="環境永續" className="aspect-2/3 object-cover" />
                  </div>
                  <div className="content mt-8 article_light xl:mt-16">
                    <h3>環境永續</h3>
                    <p>我們密切關注全球碳排放以及氣候變化議題，並以開源、節能和綠化來付諸行動。</p>
                  </div>
                  <div className="listIcons mt-6 flex flex-wrap space-x-3 xl:space-x-4">
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_6})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_13})`}}></div>
                  </div>
                </div>
                <div className="listItem fadeIn delay-300 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light">
                    <img src={vision_3} alt="多元生活" className="aspect-2/3 object-cover" />
                  </div>
                  <div className="content mt-8 article_light xl:mt-16">
                    <h3>多元生活</h3>
                    <p>由商住營造、生活零售、運動產業以至文化藝術，我們不斷探索產業創新的可能性，致力提供優質生活的選擇。</p>
                  </div>
                  <div className="listIcons mt-6 flex flex-wrap space-x-3 xl:space-x-4">
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_3})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_9})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_11})`}}></div>
                  </div>
                </div>
                <div className="listItem fadeIn delay-500 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light">
                    <img src={vision_4} alt="管理績效" className="aspect-2/3 object-cover" />
                  </div>
                  <div className="content mt-8 article_light xl:mt-16">
                    <h3>管理績效</h3>
                    <p>作為廣受大眾市民以及投資者認同與信任的企業，我們致力提升永績治理效能，為企業創造價值。</p>
                  </div>
                  <div className="listIcons mt-6 flex flex-wrap space-x-3 xl:space-x-4">
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_16})`}}></div>
                  </div>
                </div>
                <div className="listItem fadeIn delay-500 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light">
                    <img src={vision_5} alt="職場培力" className="aspect-2/3 object-cover" />
                  </div>
                  <div className="content mt-8 article_light xl:mt-16">
                    <h3>職場培力</h3>
                    <p>我們重視人力資源與培訓，努力創造關愛友善的工作環境，並提供多元的事業發展機會，讓同仁發揮潛能。</p>
                  </div>
                  <div className="listIcons mt-6 flex flex-wrap space-x-3 xl:space-x-4">
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_5})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_8})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_10})`}}></div>
                  </div>
                </div>
                <div className="listItem fadeIn delay-500 w-64 md:w-72 xl:w-80 mr-12 md:mr-16">
                  <div className="photo aspect-2/3 bg-gray-light">
                    <img src={vision_6} alt="文化藝術" className="aspect-2/3 object-cover" />
                  </div>
                  <div className="content mt-8 article_light xl:mt-16">
                    <h3>文化藝術</h3>
                    <p>我們以文化、藝術與設計融合建築，提供大眾與之對話、思考與互動的機會，藉此推動美學教育普及。</p>
                  </div>
                  <div className="listIcons mt-6 flex flex-wrap space-x-3 xl:space-x-4">
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_4})`}}></div>
                    <div className="iconItem w-10 h-10 xl:w-14 xl:h-14 bg-no-repeat bg-contain bg-center border-2 border-white/40 border-solid" style={{backgroundImage: `url(${sdgs_11})`}}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>        

        <div className="bg-kv-1 w-full h-full absolute top-0 left-0 z-0" style={{clipPath: "polygon(0 1.5%, 100% 0%, 100% 100%, 0 100%)"}}></div>

        <div className="bg-kv-1 w-full h-[50vh] absolute bottom-[-49vh] -z-10"></div>

      </section>
{/* 
      <div className="sectionBreak relative z-40">
        <div className="absolute w-screen left-0 h-[35vh] md:h-[40vh] xl:h-[45vh]">
          <Break2 />
        </div>

        <div className="translate-y-[8vh] md:translate-y-[3vh] xl:translate-y-[6vh]">
          <div className="scale-125 origin-center rotate-6 translate-y-16 md:translate-y-32">
            <div className="midde relative z-10 w-screen h-32 md:h-[14vh] rotate-[8deg] md:rotate-[4.5deg] translate-y-16 bg-gradient-to-r from-white opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-[24vh] bg-kv-1"></div>
          </div>
        </div>
      </div>
       */}
      <div className="sectionBreak relative z-40">
        <div className="absolute w-screen left-0 h-[35vh] md:h-[40vh] xl:h-[45vh]">
          <Break3 />
        </div>
       
        <div className="bg-kv-1" style={{ transform: 'translate(0px, 14vh)' }}>
          <div className="scale-125 origin-center -rotate-6 translate-y-12 xl:translate-y-[7rem]">
            <div className="midde relative z-10 w-screen h-32 md:h-[17vh] -rotate-6 md:-rotate-[2deg] translate-y-16 bg-gradient-to-r from-gray-dark opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-[24vh] bg-kv-2 md:translate-y-4 xl:-translate-y-3"></div>
          </div>
        </div>
      </div>

      <section className="creative relative z-50">
        <div className="relative z-10 pt-64 pb-48">
          <div className="container mx-auto fadeIn">
            <div className="-mt-32 mb-12 md:-mt-40 md:mb-24 md:flex md:justify-between md:items-end">
              <div className="md:basis-1/2">
                <div className="titleGruop text-white">
                  {/* <div className="en font-inner font-bold text-8xl md:text-9xl">100</div> */}
                  {/* <div className="zh mt-2 text-3xl font-inner font-bold md:text-5xl">Creative Power</div> */}
                  <div className="font-inner font-bold leading-snug md:leading-snug text-3xl md:text-5xl">35 個生命軌跡<br/>35 歲的明日記憶</div>
                </div>
              </div>
              <div className="md:basis-1/2 mt-8 article_normal">
                {/* <p className="text-white text-lg"></p> */}
                <p className="text-white">35 歲，躊躇滿志的年紀，人生走到苦樂參半的道上，不論當時成就如何，歲月已經為生命憑添幾分重量了。在那個特定的時代背景下，偶然的命運或是因緣際會，就這樣不偏不倚地落在生命線上，讓他們35歲以後的生命航向，從此有了一點不一樣。</p>
                <p className="text-white">我們邀請了 35 位來自建築、文化、藝術等不同背景的生活實踐者，在寶貴的記憶中回溯，搜出一件跟 35 歲那時候相關的物件，以一事與一物的個人史料、實物或非實物的紀錄作為分享，讓我們一睹這些彌足珍貴、足以促成社會變革的明日記憶。</p>
              </div>
            </div>
          </div>

          {creativeList && <CreativePhotos data={creativeList} />}

        </div>

        <div className="bg-kv-2 w-full h-full absolute top-0 left-0 z-0" style={{clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0 100%)"}}></div>

        <div className="bg-kv-2 w-full h-[50vh] absolute bottom-[-49vh] -z-10"></div>
      </section>

      <div className="sectionBreak relative z-60">
        <div className="">
          <div className="scale-125 origin-center -rotate-6 translate-y-12">
            <div className="midde relative z-10 w-screen h-32 -rotate-6 md:-rotate-3 translate-y-16 bg-gradient-to-r from-white opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-36 bg-kv-1"></div>
          </div>
        </div>
      </div>

      <section className="footer relative z-50">
        <div className="w-full h-screen -mt-24">
          <div className="footerInner block relative top-0 z-20 w-full h-full" style={{transform: "translate(0%, -20%)"}}>
            <Scene1Left />
          </div>
          <div className="absolute top-0 left-0 z-30 w-full h-full flex justify-center items-center pointer-events-none">
            <div className="footerLogo flex items-center mt-16 mb-4 scale-125 md:mt-20 xl:mt-24 md:mb-8 xl:mb-12 md:scale-150 xl:scale-[2]">
              <div className="w-20 h-28 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo_jut35_icon_white})`}}></div>
              <div className="ml-4 text-white">
                {/* <div className="font-extrabold tracking-wide">忠泰</div> */}
                <div className="ml-1 font-bold font-inner tracking-wider">
                  <div className="text-sm" style={{paddingLeft: "2px"}}>我們在城市</div>
                  <div className="text-3xl">三五成群</div>
                  <div className="text-3xl">破浪前行</div>
                </div>
                {/* <div className="countNumber ml-1 font-medium font-inner" data-start="1" data-end="35" data-speed="2">1</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-kv-1 w-full h-full absolute top-0 left-0 z-0" style={{clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0 100%)"}}></div>
      </section>
    </>
  )
}

export default MainContent