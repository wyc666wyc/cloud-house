import { onMounted } from 'vue'

export interface ParserProps {
  id: string | string[]
}
export default function C1(props: ParserProps) {
  console.log('c2')
  return (
    <div>c2</div>
  )
}