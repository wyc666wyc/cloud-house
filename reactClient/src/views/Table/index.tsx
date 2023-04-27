import { useParams } from 'react-router-dom'
export default function () {
  const { id } = useParams()
  return (
    <div>
      table
      <div>{ id }</div>
    </div>
  )
}