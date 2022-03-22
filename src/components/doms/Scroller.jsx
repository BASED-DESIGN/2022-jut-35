import { useEffect, useRef, useState } from "react"
import useStore from '@helpers/store'
import { useWheel } from '@use-gesture/react'
import { MathUtils } from 'three'

const Scroller = props => {
  const { children } = props
  const ref = useRef()
  const innerRef = useRef()
  const offset = useStore(state => state.offset)
  // const [offset, setOffset] = useState(0)

  const bind = useWheel(({ wheeling, delta: [deltaX, deltaY] }) => {
    const newOffset = MathUtils.clamp(offset + deltaY/2, 0, innerRef.current.offsetHeight - window.innerHeight) 
    // const newOffset = offset + deltaY/2
    useStore.setState({ offset: newOffset })
  }, {
    target: ref
  })

  useEffect(() => {
    useStore.setState({ scrollerRef: ref })
  }, [])

  return (
    <div 
      ref={ref} 
      className="fixed left-0 top-0 bottom-0 right-0"
      // style={{
      //   // width: '100%'
      //   // width: width + 'px',
      //   // height: height + 'px',
      //   transform: `translate3d(0, ${ - offset}px, 0)`,
      //   // willChange: 'transform',
      // }}
    >
      <div 
        ref={innerRef}
        className="wrap-main"
        style={{
          // width: '100%'
          // width: width + 'px',
          // height: height + 'px',
          transform: `translate3d(0, ${ - offset}px, 0)`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Scroller

// import React, {
//   useLayoutEffect,
//   useCallback,
//   useRef,
//   useState,
//   useEffect
// } from "react"
// import { animated, useSpring } from "react-spring"
// import ResizeObserver from "resize-observer-polyfill" // is this posible to remove?

// const Scroller = ({ children, scrollIntertia=70 }) => {
//   const [{ y }, set] = useSpring(() => ({
//     y: [0],
//     config: {
//       mass: 1,
//       tension: 200,
//       friction: scrollIntertia,
//       precision: 0.00001,
//       velocity: 0,
//       clamp: true
//     }
//   }));

//   const viewportRef = useRef(null);
//   const [currentHeight, setCurrentHeight] = useState(0);

//   useEffect(() => {
//     setCurrentHeight(window.innerHeight)
//   }, [])

//   const getCurrentHeight = useCallback(entries => {
//     for (let entry of entries) {
//       const crx = entry.contentRect;
//       setCurrentHeight(crx.height);
//     }
//   }, []);

//   useLayoutEffect(() => {
//     const viewport = viewportRef.current;
//     if (!viewport) return;
//     let ro = new ResizeObserver(entries => getCurrentHeight(entries));
//     ro.observe(viewport);
//     return () => {
//       if (!ro) return;
//       ro.disconnect();
//     };
//   }, [getCurrentHeight]);

//   useEffect(() => {
//     const handleScroll = () => set({ y: [-window.pageYOffset] });
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [set]);

//   return (
//     <>
//       <animated.div
//         style={{ transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}
//         ref={viewportRef}
//         className="scroll-container"
//       >
//         {children}
//       </animated.div>
//       <div style={{ height: currentHeight }} />
//     </>
//   );
// };

// export default Scroller