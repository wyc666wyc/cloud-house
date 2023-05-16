import { useState, useEffect, useRef } from 'react'
import { useAnimaton } from '@/hooks/useAnimation'
import './index.scss'

interface DrawerProps { 
  onClick: () => void,
  className: string
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