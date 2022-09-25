import { FastifyReply, FastifyRequest } from "fastify";
import simpleGit from "simple-git";
const test = `539495f|a9d6243|master
    a9d6243|8e17cfd dba91e2 cdadcd7 c954c3e 658b04e 8efa6b6 a2d7854|
    a2d7854|9d95af8||
    8efa6b6|9d95af8|test_branch
    9d95af8||
    658b04e|9317a9b
    c954c3e|9317a9b|tag: tag1
    9317a9b||
    cdadcd7|f4046fa|
    dba91e2|f4046fa|tag: tag5, tag: tag6
    f4046fa||
    8e17cfd|e34b4d0|
    e34b4d0|5ff6ce7
    5ff6ce7|d86e7ce|tag: tag2, tag: tag3, another_branch
    d86e7ce|44f3ead f537ede 79e536a|
    f537ede|653a6f6|
    79e536a|653a6f6 a1a7ab4|
    44f3ead|f2e7f46 653a6f6|
    653a6f6|422dd3c d3c5150|
    a1a7ab4|649a524|
    d3c5150|649a524|
    f2e7f46|422dd3c|
    422dd3c|649a524|
    649a524|90cd17a|
    90cd17a|76092f0 f37def6 0f8187b c44a61f 0b6fd60 66537bf f9c5353 17f5428 3c52fb4|
    76092f0||
    3c52fb4||
    17f5428||tag: x, tag: y, tag: z
    f9c5353||
    66537bf||
    0b6fd60||
    c44a61f||
    0f8187b||
    f37def6||`;
export const handleGetLog = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  //   const { latest } = await simpleGit().log([
  //     "--all",
  //     "--date-order",
  //     '--pretty="%h|%p|%d"',
  //   ]);
  return test
    ?.split("\n")
    .map((line) => {
      const [hash, parent, branches] = line.trim().split("|");

      return { hash, parent, branches };
    })
    .flat(Infinity);
};
