import create from 'zustand'

const useStore = create((set, get) => ({
  width: 0,
  height: 0,
  setSize: size => set(() => ({ width: size.width, height: size.height })),
  
  globalScale: .5,
  offset: 0,
  setOffset: offset => {
    set(() => ({ offset }))
  },
  offsetX: 0,
  offsetY: 0,
}))

export default useStore