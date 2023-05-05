import { create } from 'zustand'

type State = {
  count: number
}
type Action = {
  increment: () => void
}
const useStore = create<State & Action>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count ++ }))
}))

export default useStore