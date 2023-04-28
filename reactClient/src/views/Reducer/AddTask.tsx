import type { Task } from './index'
type Props = {
  onAddTask: (text: string) => void
}
export default function AddTask(props: Props) {
  return (
    <div>
      <button onClick={() => props.onAddTask('32')}>addTask</button>
    </div>
  )
}