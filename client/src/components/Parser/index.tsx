import { onMounted } from 'vue'

export interface ParserProps {
  id: string | string[]
}
export default function Parser(props: ParserProps) {
  console.log(props.id)
  return (
    <div>id:{props.id}</div>
  )
}