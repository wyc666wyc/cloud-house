import { useState } from 'react'
import { Upload, Button, UploadProps } from 'antd'
import { createFileChunk, useRequest } from './hooks/useUpload.hook'


export default function Uploader() {
  const [chunkSize, setChunkSize] = useState(10 * 1024 * 1024)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!
    const { name } = files[0]
    const chunks = createFileChunk(files[0], chunkSize)
    console.log(chunks)
    Promise.all(chunks.map(({ file }, index) => {
      useRequest(file, `${name}-${index}`, name)
    }))
    .then()
  }
  return (
    <div>
      <input type="file" onChange={handleFileChange}/>
    </div>
  )
}