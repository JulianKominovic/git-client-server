import { FastifyReply, FastifyRequest } from "fastify";
import simpleGit from "simple-git";
import { fastify } from "../..";

export const handleStash = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return await simpleGit({
    baseDir: (request.query as any)?.cwd,
  }).stash();
};
