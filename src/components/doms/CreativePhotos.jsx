import { spliceIntoChunks } from '@helpers/utils'
import useStore from '@helpers/store'
import { useEffect } from 'react'

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

const newway_5_2 = '/newway/5-2.jpg'

const CreativePhotos = props => {
  const { data } = props
  const groupedList = spliceIntoChunks(data, Math.ceil(data.length/3))

  useEffect(() => {
    
    // Creative Power
    if(groupedList[0]) {
      const photoRowLeftLoop = document.querySelector(".photoRowLeftLoop");
      const photoRowLeftLoopList = photoRowLeftLoop.querySelectorAll(".photoRowList");
      photoRowLeftLoopList.forEach(function(el) {
        const rowLooping = new TimelineMax({ repeat: -1 });
        rowLooping.staggerFromTo(
          el,
          30,
          { xPercent: -100, ease: Linear.easeNone },
          { xPercent: 0, ease: Linear.easeNone }
        );
        // const Move = () => rowLooping.timeScale(1);
        // const Slow = () => rowLooping.timeScale(.3);
        const Move = () => rowLooping.timeScale(.6);
        const Slow = () => rowLooping.timeScale(.2);
        photoRowLeftLoop.addEventListener("mouseenter", Slow);
        photoRowLeftLoop.addEventListener("mouseleave", Move);
        photoRowLeftLoop.addEventListener("touchstart", Slow);
        photoRowLeftLoop.addEventListener("touchend", Move);
      });
    }

    if(groupedList[1]) {
      const photoRowRightLoop = document.querySelector(".photoRowRightLoop");
      const photoRowRightLoopList = photoRowRightLoop.querySelectorAll(".photoRowList");
      photoRowRightLoopList.forEach(function(el) {
        const rowLooping = new TimelineMax({ repeat: -1 });
        rowLooping.staggerFromTo(
          el,
          30,
          { xPercent: 0, ease: Linear.easeNone },
          { xPercent: -100, ease: Linear.easeNone }
        );
        // const Move = () => rowLooping.timeScale(1);
        // const Slow = () => rowLooping.timeScale(.3);
        const Move = () => rowLooping.timeScale(.6);
        const Slow = () => rowLooping.timeScale(.2);
        photoRowRightLoop.addEventListener("mouseenter", Slow);
        photoRowRightLoop.addEventListener("mouseleave", Move);
        photoRowRightLoop.addEventListener("touchstart", Slow);
        photoRowRightLoop.addEventListener("touchend", Move);
      })
    }
  }, [])

  return (
    <div className="photoRowWrap fadeIn w-screen overflow-x-hidden space-y-8 md:space-y-10">
      <div className="photoRowLeftLoop flex">
        
        <div className="photoRowList flex whitespace-nowrap">
          {groupedList[0] && groupedList[0].map((k, i) => (
            <div key={`row-2-${i}`} className="listItem relative mr-8 md:mr-12">
              <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                <img src={newway_5_2} alt="" className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {/* <div className="title mt-2 text-sm font-medium tracking-wider">{k.summary}</div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="photoRowList flex whitespace-nowrap">
          {groupedList[0] && groupedList[0].map((k, i) => (
            <div key={`row-2-${i}`} className="listItem relative mr-8 md:mr-12">
              <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                <img src={newway_5_2} alt="" className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {/* <div className="title mt-2 text-sm font-medium tracking-wider">{k.summary}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="photoRowRightLoop flex">
        <div className="photoRowList flex whitespace-nowrap">
          {groupedList[1] && groupedList[1].map((k, i) => (
            <div key={`row-3-${i}`} className="listItem relative mr-8 md:mr-12">
              <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                <img src={newway_5_2} alt="" className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {/* <div className="title mt-2 text-sm font-medium tracking-wider">{k.summary}</div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="photoRowList flex whitespace-nowrap">
          {groupedList[1] && groupedList[1].map((k, i) => (
            <div key={`row-3-${i}`} className="listItem relative mr-8 md:mr-12">
              <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                <img src={newway_5_2} alt="" className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {/* <div className="title mt-2 text-sm font-medium tracking-wider">{k.summary}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CreativePhotos