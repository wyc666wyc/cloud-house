import type { Task } from './index'
import { useState, useRef } from 'react'
import useStore from '@/store'
type Props = {
  onAddTask: (text: string) => void
}
export default function AddTask(props: Props) {
  const [dogName, setDogName] = useState()
  const inputRef = useRef<HTMLInputElement>()
  const increment = useStore(state => state.increment)
  const syncIncrement = useStore(state => state.syncIncrement)
  const addDog = useStore(state => state.addDog)!
  const handleAddDog = () => {
    const current = inputRef.current
    if (!current) {
      return
    }
    addDog(current.value)
    current.value = ''
  }
  return (
    <div>
      <button onClick={() => props.onAddTask('32')}>addTask</button>
      <button onClick={increment}>addCount</button>
      <button onClick={() => syncIncrement('http://localhost:3000/getCount', '')}>addCountSync</button>
      <input type="text" ref={inputRef} />
      <button onClick={handleAddDog}>addDog</button>
    </div>
  )
}