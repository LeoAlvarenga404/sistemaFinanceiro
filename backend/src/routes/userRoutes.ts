import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { createUser } from '../controllers/userController'
 



const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email('Email inválido'),
  password: z.string().min(4, 'A senha precisa ter mais de 4 caracters'),
  date_birthday:  z.string().refine(val => Date.parse(val)),
  cell: z.string().min(8)
  
})

export const userRoutes = async(app: FastifyInstance) => {
  
  app.post('/user', async (req, reply) => {
    const parsedBody = userSchema.parse(req.body)
    const encryptedPassword = await bcrypt.hash(parsedBody.password, 10)

    await createUser (
      parsedBody.name,
      parsedBody.email,
      encryptedPassword,
      parsedBody.date_birthday,
      parsedBody.cell
    )
    reply.status(201).send({message: "User created", parsedBody})
  }

)}