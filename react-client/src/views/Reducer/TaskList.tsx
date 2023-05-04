import type { Task } from './index'
type Props = {
  tasks: Task[],
  onChangeTask: (task: Task) => void,
  onDeleteTask: (taskId: number) => void
}

export default function TaskList(props: Props) {
  return (
    <div>
      {
        props.tasks.map((task) => (
          <div key={task.id}>
            <span>{ task.text }</span>
            <span>{ task.done ? 'y' : 'n'}</span>
            <button onClick={() => props.onChangeTask({
              ...task,
              done: !task.done
            })}>change</button>
            <button onClick={() => props.onDeleteTask(task.id)}>delete</button>
          </div>
        ))
      }
    </div>
  )
}