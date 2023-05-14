import { useEffect, useState, memo, useMemo, useCallback } from 'react'
export type ParserProps = {
  data: number
  lifeCycle: {
    beforeLoad?: () => void,
    loaded?: () => void,
    beforeRequest?: () => void,
    requested?: () => void
  }
}
export type CounterProps = {
  count?: {
    count: number
  },
  onClick?: () => void
}
export default function Parser(props: ParserProps) {
  const { data, lifeCycle } = props
  const [count, setCount] = useState(0)
  const countObj = { count }
  const countMemo = useMemo(() => (
    { count }
  ), [count])
  const { beforeLoad, loaded, beforeRequest, requested } = lifeCycle
  useEffect(() => {
    initLifeCycle()
    beforeLoad && beforeLoad()
    console.log('loading')
    loaded && loaded()
    beforeRequest && beforeRequest()
    console.log('requesting')
    requested && requested()
  }, [])

  const handleClick = useCallback(() => {
    // setCount((state) => state + 1)
  }, [count])
  return (
    <div>parser
      count: {data}
      <Counter count={countMemo} onClick={handleClick}></Counter>
    </div>
  )
}
const initLifeCycle = () => {
  console.log('init')
}

const Counter = memo((props: CounterProps) => {
  // const { count, onClick } = props
  const [counter, setCounter] = useState({ name: '计数器', number: 0 })
  console.log('Counter-----------render')
  useEffect(() => {
    console.log('Counter-----------init')
  }, [])
  useEffect(() => {
    console.log('Counter-----------update')
  })
  return (
    <>
      <p>{ counter.name }:{ counter.number }</p>
      <button onClick={ ()=> setCounter({ ...counter, number:counter.number + 1 }) }>+</button>
      {/* <button onClick={ onClick }>++</button> */}
    </>
  )
})