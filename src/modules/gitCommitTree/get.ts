// @ts-nocheck
import { createRequire } from "module";
import { FastifyReply, FastifyRequest } from "fastify";
import { fastify } from "../..";
const require = createRequire(import.meta.url);
const { run } = require("./exported.cjs");
export const handleGitLogTree = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  let info = await new Promise((resolve) => {
    run(
      (ex: any) => {
        resolve(ex);
      },
      request.query.limit || 300,
      request.query.path
    );
  });

  return info;
};
