import { forwardRef, useEffect, useRef } from "react"
import dynamic from 'next/dynamic'
import useStore from '@helpers/store'
import { gsap } from "gsap"

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

const logo_jut35_icon_black = '/logo_jut35_icon_black.svg'
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

const IndexPage = forwardRef((props, ref) => {

  useEffect(() => {  
    // gsap.to('.sea', {
    //   opacity: 1,
    //   y: 0,
    //   duration: 2,
    //   // delay: .5,
    //   ease: Power2.easeOut
    // });
    // console.log(scrollerRef)
    // const target = document.querySelector('.wrap-main');
    // const observerItem = document.querySelectorAll('.fadeIn');

    // [...observerItem].forEach((item)=>{
    //   item.classList.add('enter');
    // })

    // translate scroll
    const target = document.querySelector('.wrap-main');
    if (target != null){
      const observerItem = document.querySelectorAll('.fadeIn');
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
          const scrollTop = target.getBoundingClientRect().top;
          // console.log(scrollTop);
          [...observerItem].forEach((item)=>{
            var containScroll = -scrollTop + window.innerHeight * 0.75;
            var itemScroll = item.getBoundingClientRect().top - scrollTop;
            // console.log(containScroll + ', ' + itemScroll);
            if (containScroll > itemScroll) {
              // console.log(item);
              item.classList.add('enter');
            }
          });
        });    
      });
      observer.observe(target, { attributes : true, attributeFilter : ['style'] });
    } else {
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
      };
    }

    const sdgList = document.querySelector('.sdgList');
    const sdgListItem = sdgList.querySelectorAll('.listItem');
    sdgList.style.height = sdgListItem[0].offsetHeight + 'px';

    gsap.registerPlugin(ScrollTrigger);
    
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
    gsap.to('.kv_left', {
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
    gsap.to('.kv_right', {
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
    gsap.to('.kv_right_inner', {
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
    gsap.to('.kv_right_inner', {
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

    
    gsap.to('.loadCover .bg', 1,{
      opacity: 0,
      // scale: 1,
      // backgroundColor: "transparent",
      ease: Expo.easeIn,
      delay: 1,
      onComplete: () => {
        console.log('end');
      }
    });

    gsap.to('.mainLogo', {
      opacity: 0,
      // ease: Linear.easeNone,
      ease: "none",
      scrollTrigger: {
        trigger: '.wrap',
        invalidateOnRefresh: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + window.innerHeight * 0.5,
        // markers: true,
      }
    });

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

    const mainLogoAnimate = function(ev) {
      const target = document.querySelector(".mainLogo");

      const evX = (ev == 'touchmove') ? ev.originalEvent.touches[0].clientX : ev.clientX;
      const evY = (ev == 'touchmove') ? ev.originalEvent.touches[0].clientY : ev.clientY;

      const sxPos = (evX / window.innerWidth * 50) * 0.7;
      const syPos = (evY / window.innerHeight * 50) * 0.7;

      gsap.to(target, 1, {
        css:{ "filter": "drop-shadow(" + Math.ceil(-sxPos) + "px " + Math.ceil(-syPos) + "px 20px rgba(0,0,0,.25))"},
        ease: Expo.easeOut
      });
    };

    window.addEventListener("touchstart", mainLogoAnimate);
    window.addEventListener("touchend", mainLogoAnimate);

    window.addEventListener("mousemove", mainLogoAnimate);
    window.addEventListener("mouseleave", mainLogoAnimate);

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
        trigger: '.newWayList .listItem:nth-child(3)',
        invalidateOnRefresh: true,
        // pin: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + window.innerHeight,
        // markers: true,
      }
    });

    gsap.to('.newWay .sloganBottom', {
      position: 'fixed',
      opacity: 1,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: '.newWayList .listItem:nth-child(3)',
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
        trigger: '.newWayList .listItem:nth-child(5)',
        invalidateOnRefresh: true,
        // pin: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + window.innerHeight * 0.5,
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
      const speed = diff * 0.5;
      currentPos = newPos;
      // kvSloganLeftLooping.timeScale(1 + speed);
      // kvSloganRightLooping.timeScale(1 + speed);
      NWsloganLeftLooping.timeScale(1 + speed);
      NWsloganRightLooping.timeScale(1 + speed);
      requestAnimationFrame(callDistort);
    };
    callDistort();


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

  }, [])

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
    <div className="wrap w-screen overflow-x-hidden" ref={ref}>

      <nav className="nav"></nav>
      
      <div className="loadCover fixed top-0 left-0 right-0 bottom-0 z-100 w-screen h-screen pointer-events-none">
        <div className="mainLogo absolute top-0 left-0 right-0 bottom-0 z-30 mx-auto w-4/5 md:w-1/2 h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo_jut35_white})`}}></div>
        <div className="bg absolute top-0 left-0 right-0 bottom-0 z-20 w-full h-full bg-kv-1"></div>
      </div>

      <section className="hero relative h-screen flex flex-wrap flex-col">
        <div className="relative kv_left pre-hero w-screen h-screen bg-kv-1 overflow-hidden scale-x-105 origin-top-left">
          <div className="kv_left_inner w-full h-full block">
            <Scene1Left />
          </div>
          <div className="sloganTop absolute top-0 left-0 z-10 w-full h-screen -bg-over-half bg-over-quarter md:bg-contain bg-repeat-x -bg-no-repeat bg-left-top scale-x-95 origin-top-left pointer-events-none" style={{backgroundImage: `url(${slogan_top})`}}></div>
        </div>
        <div className="relative kv_right pre-hero w-screen h-screen bg-kv-2 overflow-hidden" style={{clipPath: "polygon(5% 0, 100% 0%, 100% 100%, 0% 100%)"}}>
          <div className="kv_right_inner w-full h-full block" style={{transform: "translate(-50%, 0%)"}}>
            <Scene1Right />
          </div>
          <div className="sloganBottom absolute top-0 left-0 z-10 w-full h-screen -bg-over-half bg-over-quarter md:bg-contain bg-repeat-x -bg-no-repeat bg-left-bottom pointer-events-none" style={{backgroundImage: `url(${slogan_bottom})`}}></div>
        </div>
      </section>

      <section className="intro">
        <div className="bg-kv-2 py-32">
          <div className="container mx-auto">
            <div className="titleGruop fadeIn mb-32 text-gray-dark md:mb-48">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">The JUT Way</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">忠泰之道</div>
            </div>
            <div className="space-y-32">
              <div className="fadeIn md:flex">
                <div className="md:basis-1/2">
                  <img src={`${logo_jutgroup_white}`} className="mx-auto w-3/5 -h-full max-w-none md:w-2/4 md:ml-32" />
                </div>
                <div className="mt-12 md:basis-1/2 md:mt-0">
                  <div className="article_normal">
                    <p>忠泰集團的標誌以「⼈、樹、家」意象組成，藍綠兩⾊代表天空與陸地，象徵忠泰以建築營造事業立⾜天地之間。集團成立初期，懷抱「忠於建築　泰然求新」的經營理念，至今⼀直秉持初衷屹立不搖。而忠泰的英⽂名字「JUT」，來自初創時訂立的三⼤核⼼價值：「Justice」（公正）、「Union」（團結）、「Technique」（技術）取其首個字母而得名，「JUT」字義上有尖銳、突出的意思，寓意忠泰永遠走在時代尖端，成為台灣建造產業的領航企業。</p>
                  </div>
                </div>
              </div>
              <div className="fadeIn md:flex">
                <div className="md:basis-1/2">
                  <img src={`${logo_jut35_s_white}`} className="mx-auto w-3/5 max-w-none md:w-2/5 md:ml-32" />
                </div>
                <div className="mt-12 md:basis-1/2 md:mt-0">
                  <div className="article_normal">
                    <p>我們期許以「A Better Tomorrow」的企業價值，創造一個平行於台北的平行城市、以忠泰事業系統所築構的生態體系，能獨立於城市傲然而生，同時又與原屬地共生共長，迎接每一個美好的明天。</p>
                    <p>35週年標誌呈階梯狀的意象，忠泰集團期盼以平行城市創造者之姿，藉由階梯連結都市開發之點線面，既深且廣地拓展忠泰的城市版圖。</p>
                    <h5>「三五成群 破浪前行」</h5>
                    <p>忠泰集團自創立至今所建立的一切，均有賴集團裡每一位夥伴的努力與堅持。古語有話：「三十而立，四十不惑」，屆而立與不惑之間，時代正處在最變幻莫測之際，集團希望「三五成群」即能凝聚成堅定的力量，臨危而不亂，穩中可求勝，大家都不忘人與人、社會、環境之間的緊密連繫，懷抱共好、創新、精益求精的態度，成就美好明天。</p>
                  </div>
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

          <div className="sloganGroup absolute top-0 left-0 z-0 w-screen h-screen opacity-0">
            <div className="sloganTop absolute top-0 left-0 w-full h-screen bg-over-half md:bg-over-quarter bg-repeat-x bg-left-top opacity-0" style={{backgroundImage: `url(${slogan_top_white})`}}></div>
            <div className="sloganBottom absolute bottom-0 left-0 w-full h-screen bg-over-half md:bg-over-quarter bg-repeat-x bg-left-bottom opacity-0" style={{backgroundImage: `url(${slogan_bottom_white})`}}></div>
          </div>

          <div className="container mx-auto">
            <div className="titleGruop fadeIn -mt-24 mb-40 text-gray-dark md:-mt-40 md:mb-48">
              <div className="en font-title text-5xl md:text-6xl xl:text-7xl">New Way</div>
              <div className="zh mt-2 text-xl tracking-wider font-bold md:text-2xl">探索新航向</div>
            </div>
            <div className="newWayList space-y-40 md:space-y-60">

              <div className="listItem fadeIn ml-8 md:ml-48" ref={newWay1Ref}>
                <div className="item_photo shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] bg-white" />
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
                <div className="item_photo shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] bg-white" />
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
                <div className="item_photo shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] bg-white" />
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
                <div className="item_photo shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] bg-white" />
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
                <div className="item_photo shadow-[3vw_-3vw_0_0_rgba(0,0,0,0.2)] md:shadow-[2vw_-2vw_0_0_rgba(0,0,0,0.2)]">
                  <img src="http://jutgroup.jut.com.tw/images/jutBg.jpg" alt="" className="aspect-[16/9] bg-white" />
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
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/8BbBGLUzjaA" title="JUT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <div className="mt-24 fadeIn ml-8 md:ml-0 md:mt-32">
              <div className="sdgList flex flex-wrap flex-col space-x-12 md:space-x-20">
                <div className="listItem w-64 md:w-80">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-20 article_normal">
                    <h4>環境永續</h4>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem w-64 md:w-80">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-20 article_normal">
                    <h4>環境永續</h4>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem w-64 md:w-80">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-20 article_normal">
                    <h4>環境永續</h4>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem w-64 md:w-80">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-20 article_normal">
                    <h4>環境永續</h4>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
                <div className="listItem w-64 md:w-80">
                  <div className="photo aspect-2/3 bg-gray-light"></div>
                  <div className="content mt-20 article_normal">
                    <h4>環境永續</h4>
                    <p>為貫徹對人與居家美學的關注，更者對於建築藝術文化的養成，忠泰陸續成立集團相關企業，將建築規劃、營造施工、企劃行銷、室內設計、家具家飾以及藝術文化。</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>            
      </section>

      <div className="sectionBreak relative z-30" ref={break3Ref}>
        <div className="bg-kv-1">
          <div className="scale-125 origin-center -rotate-6 translate-y-12">
            <div className="midde relative z-10 w-screen h-32 -rotate-6 md:-rotate-3 translate-y-16 bg-gradient-to-r from-white opacity-30"></div>
            <div className="lower relative z-20 w-screen h-48 md:h-72 bg-kv-2"></div>
          </div>
        </div>
      </div>

      <section className="creative relative z-40">
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

      <section className="footer"></section>
    </div>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage