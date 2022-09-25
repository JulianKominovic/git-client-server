import Fastify from "fastify";
import { handleGetBranch } from "./modules/branch/get";
import { handleGitLogTree } from "./modules/gitCommitTree/get";
import { handleGetLog } from "./modules/log/get";
import cors from "@fastify/cors";
import { handleGetConfig } from "./modules/config/get";
import { handleCheckout } from "./modules/branch/checkout";
import { handleStash } from "./modules/workspace/stash";
import { handleGetCurrentBranch } from "./modules/branch/getCurrent";

const PORT = process.env.PORT ?? 3000;
export const fastify = Fastify({
  logger: true,
});
fastify.register(cors, {});

fastify.register(cors);

fastify.register(
  function (app, _, done) {
    app.get("/", handleGetBranch);
    app.get("/current", handleGetCurrentBranch);
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
fastify.register(
  function (app, _, done) {
    app.get("/", handleGitLogTree);
    done();
  },
  { prefix: "/git-log-tree" }
);
fastify.register(
  function (app, _, done) {
    app.get("/", handleGetConfig);
    done();
  },
  { prefix: "/config" }
);
fastify.register(
  function (app, _, done) {
    app.get("/stash", handleStash);
    app.get("/checkout", handleCheckout);
    done();
  },
  { prefix: "/workspace" }
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
