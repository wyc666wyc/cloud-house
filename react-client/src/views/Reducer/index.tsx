import { useState, useReducer } from "react"
import { taskReducer } from './taskReducer'
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import { ExpandReducer, TASK_ACTION } from './taskReducer'
import useStore from "@/store"

export interface Task {
  id: number
  text: string
  done: boolean
}

export default function TaskApp() {
  // const [tasks, setTasks] = useState(initialTasks)
  const [tasks, dispatch] = useReducer<ExpandReducer>(taskReducer, initialTasks)
  const count = useStore(state => state.count)

  function handleAddTask(text: string) {
    dispatch({
      type: TASK_ACTION.ADD,
      payload: {
        id: nextId++,
        text,
        done: false
      }
    })
    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false
    //   }
    // ])
  }

  function handleChangeTask(task: Task) {
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task
    //     } else {
    //       return t
    //     }
    //   })
    // )
    dispatch({
      type: TASK_ACTION.CHANGE,
      payload: task
    })
  }

  function handleDeleteTask(taskId: number) {
    // setTasks(tasks.filter((t) => t.id !== taskId))
    dispatch({
      type: TASK_ACTION.DELETE,
      payload: {
        id: taskId,
        text: '',
        done: false
      }
    })
  }
  return (
    <>
      <h1>G</h1>
      <div>count{ count }</div>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

let nextId = 3
const initialTasks = [
  { id: 0, text: "1", done: true },
  { id: 1, text: "2", done: false },
  { id: 2, text: "3", done: false }
]
