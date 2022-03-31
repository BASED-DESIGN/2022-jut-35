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
    <div className="relative nextWrap w-screen overflow-x-hidden" ref={ref}>
      <nav className="nav"></nav>

      <CoverVideo />
      <Hero />
      <MainContent />
    </div>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage