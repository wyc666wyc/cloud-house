import type { FastifyInstance } from 'fastify'
async function routes(fastify: FastifyInstance, options) {
  fastify.get('/', async (req, reply) => {
    return {
      l: 1
    }
  })
  fastify.get('/getCount', async (req, reply) => {
    return 100
  })
}

export default routes