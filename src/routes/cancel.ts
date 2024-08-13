import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function cancel(request: FastifyRequest, reply: FastifyReply) {
  const cancelScheduleParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = cancelScheduleParamsSchema.parse(request.params);

  try {
    await prisma.schedule.delete({
      where: {
        id,
      },
    });

    return reply.send(204);
  } catch (error) {
    return reply.status(400).send({
      message: `Error canceling schedule: ${error}`,
    });
  }
}
