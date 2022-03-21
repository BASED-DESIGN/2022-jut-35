import create from 'zustand'

const useStore = create((set, get) => {
  return {
    offset: 0,
    setOffset: offset => set(() => ({ offset }))
  }
})

export default useStore