import { useEffect } from 'react'
export type ParserProps = {
  lifeCycle: {
    beforeLoad?: () => void,
    loaded?: () => void,
    beforeRequest?: () => void,
    requested?: () => void
  }
}
export default function Parser(props: ParserProps) {
  const { lifeCycle } = props
  const { beforeLoad, loaded, beforeRequest, requested } = lifeCycle
  useEffect(() => {
    // Object.entries(lifeCycle).forEach(([key, value]) => {
    //   value()
    // })
    beforeLoad && beforeLoad()
    console.log('loading')
    loaded && loaded()
    beforeRequest && beforeRequest()
    console.log('requesting')
    requested && requested()
  }, [])
  return (
    <div>parser</div>
  )
}