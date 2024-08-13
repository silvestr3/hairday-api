import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createScheduleBodySchema = z.object({
    name: z.string(),
    when: z.string(),
  });

  const { name, when } = createScheduleBodySchema.parse(request.body);

  try {
    await prisma.schedule.create({
      data: {
        name,
        when: new Date(when),
      },
    });

    return reply.send(201);
  } catch (error) {
    return reply.send({
      message: `Error creating new schedule: ${error}`,
    });
  }
}
