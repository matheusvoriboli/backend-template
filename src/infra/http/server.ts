import { fastifyCors } from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  hasZodFastifySchemaValidationErrors,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { getUsersRoute } from './routes/get-users'

const server = fastify()

server.setValidatorCompiler(validatorCompiler) // Using the zod validator compiler
server.setSerializerCompiler(serializerCompiler) // Using the zod serializer compiler

// Here I'm dealing with generic errors
server.setErrorHandler((error, request, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    // If it is a validation error
    return reply.status(400).send({
      message: 'Validation error.',
      issues: error.validation,
    })
  }

  // If it is another error that I'm not expecting ( Here I should send it to some tool that is going to analyze the error like Sentry/Datadog/Grafana/OTel )

  return reply.status(500).send({ message: 'Internal server error.' })
})

server.register(fastifyCors, { origin: '*' })
server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Upload Server',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

server.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

server.register(getUsersRoute)

server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running')
})
