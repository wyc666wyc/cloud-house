import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export interface Menu {
  label: string
  icon: string
  link?: string
}
interface SideMenuProps {
  list: Menu[]
}
export default function SideMenu(props: SideMenuProps) {
  const { list } = props
  const [state, setState] = useState(true)
  const styles = {
    width: state ? "100px" : "50px"
  }
  const handleExpand = () => {
    setState((state) => !state)
  }
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={styles} className="bg-green transition-all">
      {/* <nav>
        {list.map((item) => (
          <div key={item.label} className="h-8 p-2">
            <div className={"inline-block " + item.icon}></div>
            <motion.div
              className="inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {item.label}
            </motion.div>
          </div>
        ))}
      </nav> */}
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        hahah
      </motion.nav>
      <div onClick={() => setIsOpen(isOpen => !isOpen)}>11112</div>
      <div className="cursor-pointer" onClick={handleExpand}>
        {state ? "收起" : "展开"}
      </div>
    </div>
  )
}
