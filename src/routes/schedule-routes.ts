import { FastifyInstance } from "fastify";
import { create } from "./create";
import { fetch } from "./fetch";
import { cancel } from "./cancel";

export async function ScheduleRoutes(app: FastifyInstance) {
  app.post("/schedules", create);
  app.get("/schedules", fetch);
  app.delete("/schedules/:id", cancel);
}
