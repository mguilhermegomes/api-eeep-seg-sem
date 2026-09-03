import homeRouter from "./homeRouter.js";
import aboutRouter from "./aboutRouter.js";
import alunoRouter from "./alunoRouter.js";
import livroRouter from "./livroRouter.js";

function router(app) {
  app.use("/", homeRouter);
  app.use("/about", aboutRouter);
  app.use("/alunos", alunoRouter);
  app.use("/livros", livroRouter);
}

export default router;
