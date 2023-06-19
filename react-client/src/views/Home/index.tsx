import { useState, useEffect, useLayoutEffect, useRef, forwardRef } from 'react'
import { useAnimaton } from '@/hooks/useAnimation'
import Uploader from '@/components/Uploader'
import './index.scss'

interface DrawerProps { 
  onClick: () => void,
  className: string
}

function Drawer(props: DrawerProps, ref: any) {
  const { onClick, className } = props
  return (
    <div className={className}>
      <button onClick={onClick}>close</button>
    </div>
  )
}

const DrawerR = forwardRef(Drawer)

export default function () {
  const [showDrawer, setShowDrawer] = useState(false)
  const { show, stage } = useAnimaton(showDrawer, 500)
  const domRef = useRef(1)
  const handleClick = () => {
    setShowDrawer(show => !show)
  }
  return (
    <div>
      <Uploader></Uploader>
      <button onClick={handleClick}>open</button>
      {
        show ? <DrawerR ref={domRef} className={ 'drawer ' + stage } onClick={handleClick}></DrawerR> : null
      }
    </div>
  )
}