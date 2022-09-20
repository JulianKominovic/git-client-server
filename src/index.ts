import Fastify from "fastify";
import { handleGetBranch } from "./modules/branch/get";
import { handleGetLog } from "./modules/log/get";
import cors from "@fastify/cors";
const PORT = process.env.PORT ?? 3000;
export const fastify = Fastify({
  logger: true,
});
fastify.register(cors, {});

fastify.register(
  function (app, _, done) {
    app.get("/", handleGetBranch);
    done();
  },
  { prefix: "/branch" }
);
fastify.register(
  function (app, _, done) {
    app.get("/", handleGetLog);
    done();
  },
  { prefix: "/log" }
);

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: +PORT });
    console.log("Listening on port " + PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
