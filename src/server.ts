import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { router } from "./router/router";

dotenv.config();

const app = Fastify({logger:true});
app.setErrorHandler((error, request, reply) => {
    reply.code(error.statusCode || 500).send({
      message: error.message,
      error: error.name,
    });
  });
const start = async () =>{
    await app.register(cors);
    await app.register(router);
    try {
        const port = parseInt(process.env.APIPORT || "3000",)
        await app.listen({port})
        console.log(`Server running at http://localhost:${port}`)
    } catch (error) {
        console.log(error);
    }
}
start();