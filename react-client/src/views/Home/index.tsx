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
  const name = useInput()
  const password = useInput()
  return (
    <div className={className}>
      <input type="text" {...name} />
      <input type="text" {...password} />
      <div>name{name.value}</div>
      <div>password{password.value}</div>
      <button onClick={onClick}>close</button>
    </div>
  )
}