import type { Reducer } from 'react'
import type { Task } from './index'
export enum TASK_ACTION {
  ADD,
  DELETE,
  CHANGE
}
export type ExpandAction = {
  type: TASK_ACTION,
  payload: Task
}
export type ExpandReducer = Reducer<Task[], ExpandAction>

export function taskReducer(tasks: Task[], action: ExpandAction): Task[] {
  switch(action.type) {
    case TASK_ACTION.ADD: {
      return [
        ...tasks,
        action.payload
      ]
    }
    case TASK_ACTION.CHANGE: {
      return tasks.map(task => {
        if (task.id === action.payload.id) {
          return action.payload
        } else {
          return task
        }
      })
    }
    case TASK_ACTION.DELETE: {
      return tasks.filter(task => task.id !== action.payload.id)
    }
    default: {
      throw Error('k') 
    }
  }
}

function setMethod() {
  const methods = ["get", "post", "delete", "put"];
  return methods.reduce((map: any, method: string) => {
    map[method] = (url: string, options: Object) => {
      console.log(method)
    }
    return map
  }, {})
}
const res = setMethod()
console.log(res)
