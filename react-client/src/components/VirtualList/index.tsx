import { useState } from 'react'
import { Menu } from '@/components/SideMenu'
interface VProps {
  height: number,
  itemHeight: number,
  list: Menu[]
}
export default function (props: VProps) {
  const { height, itemHeight, list } = props
  const count = list.length
  const [scrollOffset, setScrollOffset] = useState(0)
  const containerStyle = {
    width: 200,
    height,
    position: 'relative',
    overflow: 'auto'
  }
  const contentStyle = {
    width: '100%',
    height: itemHeight * count
  }
  const getCurrentChildren = () => {
    const startIndex = Math.floor(scrollOffset / itemHeight)
    const topBufferStartIndex = Math.max(0, startIndex - 2)
    const visibleCount = Math.ceil(height / itemHeight)
    const bottomBufferEndIndex = Math.min(count - 1, startIndex + visibleCount + 2)
    const children = []
    for (let i = topBufferStartIndex; i < bottomBufferEndIndex; i++) {
      const item = list[i]
      const itemStyle = {
        position: 'absolute',
        height: itemHeight,
        width: '100%',
        top: itemHeight * i,
      }
      children.push(
        <div key={i} index={i} style={itemStyle}>{item.label}</div>
      );
    }
    return children
  }
  const scrollHandle = (event) => {
    const { scrollTop } = event.currentTarget
    setScrollOffset(scrollTop)
  }
  return (
    <div style={containerStyle} onScroll={scrollHandle}>
      <div style={contentStyle}>
        { getCurrentChildren() }
      </div>
    </div>
  )
}