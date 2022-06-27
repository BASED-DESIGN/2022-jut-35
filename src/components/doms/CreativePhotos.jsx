import { spliceIntoChunks } from '@helpers/utils'
import { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import { animated, useTransition, config, easings, useSpringRef, useChain } from '@react-spring/web'
import {
  TimelineMax,
  Linear,
} from "gsap"

const placeholder = 'placeholder.jpg'

const CreativePhotos = props => {
  const data = props.data.map((d, i) => ({ ...d, index: i }))
  const groupedList = spliceIntoChunks(data, Math.ceil(data.length/2))
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  useEffect(() => {
    // Creative Power
    // console.log('0-' + groupedList[0][0].name);
    // console.log('1-' + groupedList[1][0].name);
    // console.log('2-' + groupedList[2][0].name);

    // if(groupedList[0]) {
      const photoRowLeftLoop = document.querySelector(".photoRowLeftLoop");
      const photoRowLeftLoopList = photoRowLeftLoop.querySelectorAll(".photoRowList");
      photoRowLeftLoopList.forEach(function(el) {
        const rowLooping = new TimelineMax({ repeat: -1 });
        rowLooping.staggerFromTo(
          el,
          50,
          { xPercent: -100, ease: Linear.easeNone },
          { xPercent: 0, ease: Linear.easeNone }
        );
        // const Move = () => rowLooping.timeScale(1);
        // const Slow = () => rowLooping.timeScale(.3);
        const Move = () => rowLooping.timeScale(.4);
        const Slow = () => rowLooping.timeScale(.1);
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
          50,
          { xPercent: 0, ease: Linear.easeNone },
          { xPercent: -100, ease: Linear.easeNone }
        );
        // const Move = () => rowLooping.timeScale(1);
        // const Slow = () => rowLooping.timeScale(.3);
        const Move = () => rowLooping.timeScale(.4);
        const Slow = () => rowLooping.timeScale(.1);
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
            {groupedList[0] && groupedList[0].map((d, i) => (
              <Item 
                key={`row-l-1-${i}`} 
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
                key={`row-l-1-${i}`} 
                data={d} 
                setActiveModalIndex={setActiveModalIndex}
              />
            ))}
          </div>
          <div className="photoRowList flex whitespace-nowrap">
            {groupedList[1] && groupedList[1].map((d, i) => (
              <Item 
                key={`row-l-1-${i}`} 
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

  const openModal = e => {
    setActiveModalIndex(data.index)
    document.scrollingElement.style.overflowY = 'hidden'
  }

  return (
    <div 
      className="listItem relative mr-8 md:mr-12" 
      onClick={openModal}
    >
      <div className="photo w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem]">
        <img src={data.image ? data.image.sizes.medium_large : placeholder} alt={data.name} className="object-cover w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 px-4 py-3 md:px-5 md:py-4 flex flex-col justify-end items-start bg-gradient-to-t from-black/30 text-white opacity-80 ease-expo duration-1000 --backdrop-blur-sm cursor-pointer hover:opacity-100">
        <div className="name text-xl font-medium tracking-wider">{data.name}</div>
        {data.title ? <div className="title mt-1 text-sm font-medium tracking-wider">{data.title}</div> : ''}
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

  const close = () => {
    setActiveModalIndex(null)
    document.scrollingElement.style.overflowY = 'auto'
  }

  return (
    ReactDOM.createPortal(
      transition((style, item) => item &&
        <ModalContent 
          index={index}
          style={style}
          data={data}
          close={close}
          switchItem={setActiveModalIndex}
        />
      ),
      document.querySelector('body')
    )
  )
}

const ModalContent = props => {
  const { style: modalStyle, data, index, close, switchItem } = props
  const [switching, setSwitching] = useState(false)
  const [cacheNewIndex, setCachNewIndex] = useState(null)
  const imgRef = useSpringRef()
  const textRef = useSpringRef()

  const imgTrans = useTransition(!switching, {
    ref: imgRef,
    from: { opacity: 0, transform: 'translate3d(0, 64px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -64px, 0)' },
    config: { ...config.gentle, duration: 1400, easing: easings.easeInOutExpo },
  })

  const textTrans = useTransition(!switching, {
    ref: textRef,
    from: { opacity: 0, transform: 'translate3d(0, -64px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 64px, 0)' },
    config: { ...config.gentle, duration: 1400, easing: easings.easeInOutExpo },
    onRest: () => {
      if (cacheNewIndex!==null) {
        switchItem(cacheNewIndex)
        setSwitching(false)
      }
    }
  })

  useChain([imgRef, textRef], [0, 0.2])

  const increase = (e) => {
    setSwitching(true)
    const newIndex = index+1<=data.length-1 ? index+1 : 0
    setCachNewIndex(newIndex)
  }

  const decrease = (e) => {
    setSwitching(true)
    const newIndex = index-1>=0 ? index-1 : data.length-1
    setCachNewIndex(newIndex)
  }


  // const items = index!=null ? [
  //   data[index].summary,
  //   data[index].name,
  //   data[index].title
  // ] : []

  // const trail = useTrail(items.length, {
  //   config: { mass: 5, tension: 2000, friction: 200 },
  //   opacity: !switching ? 1 : 0,
  //   x: !switching ? 0 : 20,
  //   // height: !switching ? 110 : 0,
  //   from: { opacity: 0, x: 20, height: 0 },
  // })

  {/* .photoRowContent -> open and toggle class "opacity-0 pointer-events-none" */}
  return (
    <animated.div 
      style={modalStyle}
      className="photoRowContent fixed top-0 left-0 z-100 w-full h-full flex justify-center items-center backdrop-blur bg-black/50"
    >
      <div 
        className="closeBtn absolute top-6 left-0 w-full text-center mix-blend-difference"
        onClick={close}
      >
        <div className="text-2xl text-white cursor-pointer duration-400 ease-expo drop-shadow-lg scale-125 opacity-8 hover:opacity-10 md:text-2xl">✕</div>
      </div>

      <div 
        className="navBtn absolute bottom-8 left-0 w-full px-12 flex justify-between mix-blend-difference"
      >
        <div 
          className="text-2xl text-white text-left cursor-pointer duration-400 ease-expo drop-shadow-lg scale-125 opacity-80 hover:opacity-100 md:text-3xl"
          onClick={decrease}
        >←</div>
        <div
          className="text-2xl text-white text-right cursor-pointer duration-400 ease-expo drop-shadow-lg scale-125 opacity-80 hover:opacity-100 md:text-3xl"
          onClick={increase}
        >→</div>
      </div>

      {/* <div className="px-12 py-6 w-full md:w-[calc(36rem+5vw)] xl:w-[calc(40rem+5vw)]">
        <article className="article font-inner text-white md:mt-20 xl:scale-125">
          {index!==null &&
            trail.map(({ height, x, ...style }, i) => (
              <animated.div key={i} style={style}>
                <animated.div>{items[i]}</animated.div>
              </animated.div>
            ))
          }
        </article>
      </div> */}

      {index!==null &&
        <div className="px-12 py-24 w-full h-full max-w-7xl overflow-y-scroll md:flex md:items-center md:overflow-hidden">
          <div className='md:w-1/2'>
            <div className="w-full h-full flex justify-center items-center">
              {imgTrans((style, item) => item &&
                <animated.img 
                  style={style} 
                  src={data[index].image ? data[index].image.sizes.medium_large : placeholder} 
                  alt={data[index].name} 
                  className="w-full h-auto md:w-auto md:h-90vh"
                />
              )}
            </div>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 md:ml-12'>
            {textTrans((style, item) => item && 
              <animated.article style={style} className="article font-inner text-white md:mt-20">
                <div
                  className="space-y-6 font-medium text-lg text-justify leading-[1.675] md:leading-[1.75] md:text-xl" 
                  dangerouslySetInnerHTML={{ __html: data[index].summary }}
                />
                <div className="font-inner text-right font-medium mt-6 md:mt-8">
                  <div className="text-2xl">{data[index].name}</div>
                  <div className="mt-1 text-base">{data[index].title}</div>
                </div>
              </animated.article>
            )}
          </div>
        </div>
      }
    </animated.div>
  )
}