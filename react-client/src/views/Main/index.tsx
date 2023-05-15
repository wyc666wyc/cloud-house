import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu, { Menu } from '@/components/SideMenu'

const menuList: Menu[] = [
  {
    label: 'home',
    icon: 'i-mdi:home',
    link: '',
  },
  {
    label: 'about',
    icon: 'i-mdi:about',
    link: '',
  },
  {
    label: 'note',
    icon: 'i-mdi:note',
    link: '',
  },
  {
    label: 'table',
    icon: 'i-mdi:table',
    link: '',
  },
  {
    label: 'form',
    icon: 'i-mdi:form',
    link: '',
  },
]

export default function Main() {
  return (
    <div>
      <SideMenu list={menuList}></SideMenu>
      <div>
        <Outlet />
      </div>
    </div>
  )
}