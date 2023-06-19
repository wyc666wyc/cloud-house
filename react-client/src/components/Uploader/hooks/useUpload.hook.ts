const url = ``
export const useRequest = async (chunk: Blob, hash: string, name: string) => {
  const formData = new FormData()
  formData.append('chunk', chunk)
  formData.append('hash', hash)
  formData.append('name', name)
  const res = await fetch(url, {
    method: 'POST',
    body: formData
  })
  return await res.json()
}

export const createFileChunk = (file: File, size: number) => {
  const fileChunkList = []
  let cur  = 0
  while(cur < file.size) {
    fileChunkList.push({
      file: file.slice(cur, cur + size)
    })
    cur += size
  }
  return fileChunkList
}