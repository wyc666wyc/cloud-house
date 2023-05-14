import { Outlet } from 'react-router-dom'
import SideMenu, { Menu } from '@/components/SideMenu'
import { useState } from 'react'
const menuList: Menu[] = [
  {
    label: 'home',
    icon: 'home',
    link: 'home'
  },
  {
    label: 'work',
    icon: 'work',
    link: 'work'
  },
  {
    label: 'note',
    icon: 'note',
    link: 'note'
  },
  {
    label: 'about',
    icon: 'about',
    link: 'about'
  },
]
export default function Main() {
  return (
    <div className='flex h-full'>
      <SideMenu list={menuList}></SideMenu>
      <div className='flex-1 bg-green'>
        <Outlet/>
      </div>
    </div>
  )
}