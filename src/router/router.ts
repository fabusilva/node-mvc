import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { ListCustomerController } from "../controllers/ListCustomerController";
import { DeleteCustomerController } from "../controllers/DeleteCustomerController";

export async function router(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return "Server on!";
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/list",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomerController().handle(request, reply);
    }
  );

  fastify.delete<{ Params: { id: string } }>(
    "/delete/:id",
    async (request, reply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );
}
