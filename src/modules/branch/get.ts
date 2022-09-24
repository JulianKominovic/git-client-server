import { FastifyReply, FastifyRequest } from "fastify";
import simpleGit from "simple-git";
import { fastify } from "../..";
import os from "os";

export const handleGetBranch = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  console.log(request.query);
  return await simpleGit({
    baseDir: (request.query as any)?.cwd,
  }).branch();
};
