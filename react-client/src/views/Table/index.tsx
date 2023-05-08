import { useParams } from 'react-router-dom'
import Parser, { ParserProps } from '@/components/Parser'
export default function () {
  const { id } = useParams()
  return (
    <div>
      <Parser lifeCycle={lifeCycle}></Parser>
      <div>{ id }</div>
    </div>
  )
}

const lifeCycle = {
  beforeLoad() {
    console.log('beforeLoad')
  },
  loaded() {
    console.log('loaded')
  },
  beforeRequest() {
    console.log('beforeRequest')
  },
  requested() {
    console.log('requested')
  }
}