import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const getUsersRoute: FastifyPluginAsyncZod = async server => {
  server.get('/users', () => {
    return 'Hello World'
  })
}
