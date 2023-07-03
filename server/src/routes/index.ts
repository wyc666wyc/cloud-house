import type { FastifyInstance } from 'fastify'
import { resolve } from 'path'
import { mkdir } from 'fs'
import { pipeline } from 'stream'

async function routes(fastify: FastifyInstance, options) {
  fastify.get('/', async (req, reply) => {
    return {
      l: 1
    }
  })
  fastify.get('/getCount', async (req, reply) => {
    return 100
  })
  fastify.post('/upload', async (req, reply) => {
    const file = await req.file()
    console.log('file', file.fields)
    mkdir(('./public/ha'), (res) => {
      // console.log('success', res)
    })
    return file.filename
  })
}

export default routes