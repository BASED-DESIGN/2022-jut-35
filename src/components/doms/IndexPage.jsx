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
          if (item.getBoundingClientRect().y - window.innerHeight * 0.85 < 0) {
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
      
      {/* <BackgroundMans /> */}

      <MainContent />
    </div>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage