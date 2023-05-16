import { useState, useRef, useEffect } from 'react'
export const useAnimaton = (shouldShow: boolean, duration: number) => {
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