import { FastifyReply, FastifyRequest } from "fastify";
import simpleGit from "simple-git";

export const handleGetLog = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return await simpleGit().log();
};
