import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu, { Menu } from '@/components/SideMenu'
import VirtaulList from '@/components/VirtualList'

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
  {
    label: 'input',
    icon: 'i-mdi:input',
    link: '',
  },
  {
    label: 'select',
    icon: 'i-mdi:select',
    link: '',
  },
  {
    label: 'option',
    icon: 'i-mdi:option',
    link: '',
  },
  {
    label: 'cascader',
    icon: 'i-mdi:cascader',
    link: '',
  },
  {
    label: 'date',
    icon: 'i-mdi:date',
    link: '',
  },
  {
    label: 'dd',
    icon: 'i-mdi:date',
    link: '',
  },
  {
    label: 'ffdds',
    icon: 'i-mdi:date',
    link: '',
  },
  {
    label: 'dsafgb',
    icon: 'i-mdi:date',
    link: '',
  },
]

export default function Main() {
  return (
    <div>
      {/* <SideMenu list={menuList}></SideMenu> */}
      <VirtaulList list={menuList} height={100} itemHeight={30}></VirtaulList>
    </div>
  )
}