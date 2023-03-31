import mongodb from '@fastify/mongodb'
import type { FastifyInstance } from 'fastify'

export default function (app: FastifyInstance) {
 app.register(mongodb, {
  url: 'mongodb://localhost:27017'
 })
}