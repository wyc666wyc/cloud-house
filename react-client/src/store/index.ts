import { create, StateCreator } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { wait } from '@dynamic-form/utils/src/index'

type State = {
  count: number,
  countLoading: boolean,
  dogs?: string[]
}
type Action = {
  increment: () => void,
  syncIncrement: (url: string, params: string) => void,
  addDog?: (name: string) => void
}
const fetchData = (url: string) => {
  return fetch(url)
}
const store: StateCreator<State & Action> = (set, get) => ({
  count: 0,
  countLoading: false,
  dog: [],
  increment: () => set(state => ({ count: state.count + 1 })),
  syncIncrement: async (url, params) => {
    set({ countLoading: true })
    const response = await fetchData(url)
    await wait(1000)
    set({ count: await response.json() })
    set({ countLoading: false })
  },
  addDog: (name) => {
    set(state => ({ dogs: state.dogs ? [...state.dogs, name] : [] }))
  }
})

const useStore = create(
  devtools(
    persist(store, {
      name: 'ha'
    })
  )
)

export default useStore