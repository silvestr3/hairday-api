import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const schedules = await prisma.schedule.findMany();

  return schedules;
}
