import fastify from 'fastify'
import cors from '@fastify/cors'
import { memorisRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memorisRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
