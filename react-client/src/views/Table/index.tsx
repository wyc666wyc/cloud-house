import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Parser, { ParserProps } from '@/components/Parser'
export default function () {
  const { id } = useParams()
  const [data, setData] = useState(0)
  return (
    <div>
      <Parser lifeCycle={lifeCycle} data={data}></Parser>
      <div>{ id }</div>
      <button onClick={() => setData(() => data + 1)}>click</button>
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