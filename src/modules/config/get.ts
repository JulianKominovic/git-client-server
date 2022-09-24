import { FastifyReply, FastifyRequest } from "fastify";
import simpleGit from "simple-git";
import { fastify } from "../..";

export const handleGetConfig = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const config = await simpleGit().listConfig();

  return config.all;
};
