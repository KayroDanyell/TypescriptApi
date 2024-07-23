import express, { Response } from "express";
import router from "./routes";

const app = express();

app.use(express.json());
router(app);

app.get("/", (_, res:Response) => {
  res.send("Bem vindo ao curso de TypeScript!");
});

function criaPet(id:number, nome:string, especie:string, idade:number, adotado:boolean) {
  return {
    id,
    nome,
    especie,
    idade,
    adotado,
  };
}

let id = 0;
function geraId():number{
  id = id + 1;
  return id;
}

export default app;
