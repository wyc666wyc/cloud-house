import type { FastifyInstance } from 'fastify'
async function routes(fastify: FastifyInstance, options) {
  fastify.get('/', async (req, reply) => {
    return {
      l: 1
    }
  })
  fastify.post
}

export default routes