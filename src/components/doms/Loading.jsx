import { useState, useEffect } from "react"
import { animated, useTransition, config } from 'react-spring'

export default function Loading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const transitions = useTransition(loading, {
    // from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: loading,
    delay: 1000,
    // config: config.molasses,
    // onRest: () => set(!show),
  })

  return transitions(
    (styles, item) => item && 
      <animated.div 
        style={{
          backgroundColor: 'rgb(118, 204, 123)',
          color: 'white',
          ...styles
        }} 
        className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center font-bold text-6xl"
      >忠泰集團35週年</animated.div>
  )
}