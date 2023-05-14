import { useEffect, useState } from "react"
export interface Menu {
  label: string
  icon: string
  link: string
}
interface SideMenuProps {
  list: Menu[]
}

export default function SideMenu(props: SideMenuProps) {
  const { list } = props
  const [state, setState] = useState(true)
  const styles = {
    width: state ? "100px" : "50px",
  }
  return (
    <div className="transition-all" style={styles}>
      <nav>
        {list.map((item) => (
          <div key={item.label}>
            <div className="i-mdi-123"></div>
            {item.label}
          </div>
        ))}
      </nav>
      <footer>
        <div
          className="cursor-pointer"
          onClick={() => setState((state) => !state)}
        >
          {state ? "收起" : "展开"}
        </div>
      </footer>
    </div>
  )
}
