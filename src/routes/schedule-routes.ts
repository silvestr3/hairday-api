import { FastifyInstance } from "fastify";
import { create } from "./create";
import { fetch } from "./fetch";

export async function ScheduleRoutes(app: FastifyInstance) {
  app.post("/schedules", create);
  app.get("/schedules", fetch);
}
