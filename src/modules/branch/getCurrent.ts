import { FastifyReply, FastifyRequest } from "fastify";
import simpleGit from "simple-git";
import { fastify } from "../..";
import os from "os";

export const handleGetCurrentBranch = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return await simpleGit({
    baseDir: (request.query as any)?.cwd,
  }).branch(["--show-current"]);
};
