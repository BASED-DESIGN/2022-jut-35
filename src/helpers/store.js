import create from 'zustand'

const useStore = create((set, get) => ({
  videoEnded: false,

  scrollerRef: null,

  break1Ref: null,
  break2Ref: null,
  break3Ref: null,

  newWay1Ref: null,
  newWay2Ref: null,
  newWay3Ref: null,
  newWay4Ref: null,
  newWay5Ref: null,
  
  width: 0,
  height: 0,
  setSize: size => set(() => ({ width: size.width, height: size.height })),
  
  // globalScale: .5,
  // offset: 0,
  // // setOffset: offset => {
  // //   set(() => ({ offset }))
  // // },
  // offsetY1: 0,
  // offsetY2: 0,
}))

export default useStore