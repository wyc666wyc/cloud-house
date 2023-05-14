import { useState, useEffect, useRef } from 'react'
import './index.scss'

interface DrawerProps { 
  onClick: () => void,
  className: string
}
const useAnimaton = (shouldShow: boolean, duration: number) => {
  const [show, setShow] = useState(shouldShow)
  const [stage, setStage] = useState(shouldShow ? 'enter' : 'leave')
  const timer = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    if (shouldShow) {
      setShow(true)
      setStage('enter')
    } else {
      setStage('leave')
      timer.current = setTimeout(() => {
        setShow(false)
      }, duration)
    }
    return () => {
      clearTimeout(timer.current!)
    }
  }, [shouldShow, duration])
  return {
    show,
    stage
  }
}
export default function () {
  const [showDrawer, setShowDrawer] = useState(false)
  const { show, stage } = useAnimaton(showDrawer, 500)
  const handleClick = () => {
    setShowDrawer(show => !show)
  }
  return (
    <div>
      <button onClick={handleClick}>open</button>
      {
        show ? <Drawer className={ 'drawer ' + stage } onClick={handleClick}></Drawer> : null
      }
    </div>
  )
}

function Drawer(props: DrawerProps) {
  const { onClick, className } = props
  return (
    <div className={className}>
      <button onClick={onClick}>close</button>
    </div>
  )
}