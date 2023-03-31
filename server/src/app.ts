import Fastify from "fastify"
import cors from '@fastify/cors'
import installMongo from "./utils/mongodb"
import routes from './routes/index'

const fastify = Fastify({
  logger: true
})
installMongo(fastify)
fastify.register(cors)
fastify.register(routes)

fastify.listen({
  port: 3000
})