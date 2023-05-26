import WaveSurfer from 'wavesurfer.js'
import { useEffect, useRef, useState } from 'react'

export default function Music() {
  const musicRef = useRef<WaveSurfer>()
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    musicRef.current = WaveSurfer.create({
      container: '#music',
      waveColor: 'violet',
      progressColor: 'purple'
    })
  }, [])
  const handleAppendMusic = () => {
    musicRef.current?.load('./hldwm.mp3')
  }
  const handlePlay = () => {
    const isPlaying = musicRef.current?.isPlaying()
    isPlaying ? musicRef.current?.pause() : musicRef.current?.play()
    setPlaying(isPlaying!)
  }
  return (
    <div className='flex'>
      <div id='music' className='w-100 h-5'></div>
      <button onClick={handleAppendMusic}>appendMusic</button>
      <button onClick={handlePlay}>
        {playing ? 'pause' : 'play'}
      </button>
    </div>
  )
}