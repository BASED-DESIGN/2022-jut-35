import create from 'zustand'

const useStore = create((set, get) => ({
  videoEnded: false,
  creativeList: null
}))

export default useStore