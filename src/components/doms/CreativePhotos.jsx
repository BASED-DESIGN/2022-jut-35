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
    <>

    <div className="photoRowWrap fadeIn w-screen overflow-x-hidden space-y-8 md:space-y-10">
      <div className="photoRowLeftLoop flex">
        
        <div className="photoRowList flex whitespace-nowrap">
          {groupedList[0] && groupedList[0].map((k, i) => (
            <div key={`row-2-${i}`} className="listItem relative mr-8 md:mr-12">
              <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                <img src={newway_5_2} alt={k.name} className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {k.title ? <div className="title mt-2 text-sm font-medium tracking-wider">{k.title}</div> : ''}
              </div>
            </div>
          ))}
        </div>
        <div className="photoRowList flex whitespace-nowrap">
          {groupedList[0] && groupedList[0].map((k, i) => (
            <div key={`row-2-${i}`} className="listItem relative mr-8 md:mr-12">
              <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                <img src={newway_5_2} alt={k.name} className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {k.title ? <div className="title mt-2 text-sm font-medium tracking-wider">{k.title}</div> : ''}
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
                <img src={newway_5_2} alt={k.name} className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {k.title ? <div className="title mt-2 text-sm font-medium tracking-wider">{k.title}</div> : ''}
              </div>
            </div>
          ))}
        </div>
        <div className="photoRowList flex whitespace-nowrap">
          {groupedList[1] && groupedList[1].map((k, i) => (
            <div key={`row-3-${i}`} className="listItem relative mr-8 md:mr-12">
              <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
                <img src={newway_5_2} alt={k.name} className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
                <div className="name text-2xl font-medium tracking-wider">{k.name}</div>
                {k.title ? <div className="title mt-2 text-sm font-medium tracking-wider">{k.title}</div> : ''}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* .photoRowContent -> open and toggle class "opacity-0 pointer-events-none" */}
    <div className="photoRowContent fixed top-0 left-0 z-90 w-full h-full flex justify-center items-center backdrop-blur bg-black/30 ease-expo duration-1000 opacity-0 pointer-events-none">
      <div className="closeBtn absolute top-6 left-0 w-full text-center">
        <div className="text-2xl text-white cursor-pointer duration-400 ease-expo hover:scale-125 md:text-4xl">✕</div>
      </div>
      <div className="px-12 py-6 w-full md:w-[calc(36rem+5vw)] xl:w-[calc(40rem+5vw)]">
        <article className="article font-inner text-white md:mt-20 xl:scale-125">
          <div className="space-y-6 font-medium text-lg text-justify leading-[1.675] md:leading-[1.75] md:text-xl" dangerouslySetInnerHTML={{ __html: groupedList[0][1].summary }}></div>
          <div className="font-inner text-right font-medium mt-6 md:mt-8">
            <div className="text-2xl">{groupedList[0][1].name}</div>
            <div className="mt-1 text-base">{groupedList[0][1].title}</div>
          </div>
        </article>
      </div>
    </div>

    </>
  )
}

export default CreativePhotos