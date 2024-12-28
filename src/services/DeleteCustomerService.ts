import prismaClient from "../prisma";
export interface DeleteCustomerProps{
    id:string
}
export class DeleteCustomerService {
  async execute({id}:DeleteCustomerProps) {
    if (!id) {
      throw new Error("ID não enviado");
    }

    const find = await prismaClient.customer.findFirst({ where: { id: id } });
    if (!find) {
      throw new Error("Cliente não existe");
    }

    const customer = await prismaClient.customer.delete({
      where: { id: find.id },
    });

    return { message: "Customer deletado", customer }
  }
}
