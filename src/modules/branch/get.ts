import { FastifyReply, FastifyRequest } from "fastify";
import simpleGit from "simple-git";
import { fastify } from "../..";

export const handleGetBranch = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return await simpleGit().branch();
};
