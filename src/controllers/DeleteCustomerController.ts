import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

interface DeleteCustomerParams {
  id: string;
}

export class DeleteCustomerController {
  async handle(
    request: FastifyRequest<{ Params: DeleteCustomerParams }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    const serviceDelete = new DeleteCustomerService();
    const customer = await serviceDelete.execute({ id });
    reply.send(customer);
  }
}
