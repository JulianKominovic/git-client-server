import Fastify from "fastify";
import { simpleGit } from "simple-git";

const PORT = process.env.PORT ?? 3000;
const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  return await simpleGit().branch();
});

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
