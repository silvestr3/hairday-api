import fastify from "fastify";
import { ScheduleRoutes } from "./routes/schedule-routes";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.register(ScheduleRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server is running");
  });
