import { spliceIntoChunks } from '@helpers/utils'
import useStore from '@helpers/store'
import { useEffect, useState } from 'react'
import { animated, useSpring, useTransition, config, easings } from '@react-spring/web'

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
  const data = props.data.map((d, i) => ({ ...d, index: i }))
  const groupedList = spliceIntoChunks(data, Math.ceil(data.length/3))
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  useEffect(() => {
    // Creative Power
    // if(groupedList[0]) {
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
    // }

    // if(groupedList[1]) {
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
    // }
  }, [])

  return (
    <>
      <div className="photoRowWrap fadeIn w-screen overflow-x-hidden space-y-8 md:space-y-10">
        <div className="photoRowLeftLoop flex">
          <div className="photoRowList flex whitespace-nowrap">
            {groupedList[0] && groupedList[0].map((d, i) => (
              <Item 
                key={`row-l-1-${i}`} 
                data={d} 
                setActiveModalIndex={setActiveModalIndex}
              />
            ))}
          </div>
          <div className="photoRowList flex whitespace-nowrap">
            {groupedList[1] && groupedList[1].map((d, i) => (
              <Item 
                key={`row-l-2-${i}`} 
                data={d} 
                setActiveModalIndex={setActiveModalIndex}
              />
            ))}
          </div>
        </div>

        <div className="photoRowRightLoop flex">
          <div className="photoRowList flex whitespace-nowrap">
            {groupedList[1] && groupedList[1].map((d, i) => (
              <Item 
                key={`row-r-1-${i}`} 
                data={d} 
                setActiveModalIndex={setActiveModalIndex}
              />
            ))}
          </div>
          <div className="photoRowList flex whitespace-nowrap">
            {groupedList[2] && groupedList[2].map((d, i) => (
              <Item 
                key={`row-r-2-${i}`} 
                data={d} 
                setActiveModalIndex={setActiveModalIndex}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal 
        index={activeModalIndex} 
        data={data}
        setActiveModalIndex={setActiveModalIndex}
      />
    </>
  )
}

export default CreativePhotos

const Item = props => {
  const { data, setActiveModalIndex } = props

  return (
    <div 
      className="listItem relative mr-8 md:mr-12" 
      onClick={()=>setActiveModalIndex(data.index)}
    >
      <div className="photo aspect-1/1 w-60 h-60 md:w-80 md:h-80">
        <img src={newway_5_2} alt={data.name} className="object-cover w-full h-full" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25 text-white opacity-0 ease-expo duration-1000 backdrop-blur-sm cursor-pointer hover:opacity-100">
        <div className="name text-2xl font-medium tracking-wider">{data.name}</div>
        {data.title ? <div className="title mt-2 text-sm font-medium tracking-wider">{data.title}</div> : ''}
      </div>
    </div>
  )
}

const Modal = props => {
  const { 
    data, setActiveModalIndex,
    index: activeIndex
  } = props
  const [index, setIndex] = useState(null)

  useEffect(() => {
    if(activeIndex!==null) setIndex(activeIndex)
  }, [activeIndex])

  const transition = useTransition(activeIndex!==null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.gentle, duration: 1000, easing: easings.easeInOutExpo }
  })

  return (
    transition((style, item) => item &&
      <ModalContent 
        index={index}
        style={style}
        data={data}
        setActiveModalIndex={setActiveModalIndex}
      />
    )
  )
}

const ModalContent = props => {
  const { style, data, index, setActiveModalIndex } = props

  {/* .photoRowContent -> open and toggle class "opacity-0 pointer-events-none" */}
  return (
    <animated.div 
      style={style}
      className="photoRowContent fixed top-0 left-0 z-90 w-full h-full flex justify-center items-center backdrop-blur bg-black/30"
    >
      <div 
        className="closeBtn absolute top-6 left-0 w-full text-center"
        onClick={()=>setActiveModalIndex(null)}
      >
        <div className="text-2xl text-white cursor-pointer duration-400 ease-expo hover:scale-125 md:text-4xl">✕</div>
      </div>

      {index!==null &&
        <div className="px-12 py-6 w-full md:w-[calc(36rem+5vw)] xl:w-[calc(40rem+5vw)]">
          <article className="article font-inner text-white md:mt-20 xl:scale-125">
            <div 
              className="space-y-6 font-medium text-lg text-justify leading-[1.675] md:leading-[1.75] md:text-xl" 
              dangerouslySetInnerHTML={{ __html: data[index].summary }}
            />
            <div className="font-inner text-right font-medium mt-6 md:mt-8">
              <div className="text-2xl">{data[index].name}</div>
              <div className="mt-1 text-base">{data[index].title}</div>
            </div>
          </article>
        </div>
      }
    </animated.div>
  )
}