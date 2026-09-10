const alunos = [];

class Aluno {
  constructor(nome, idade, nota) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.idade = idade;
    this.nota = nota;
  }
}

class AlunoController {
  index(req, res) {
    res.render("aluno", { alunos });
  }

  store(req, res) {
    const { nome, idade, nota } = req.body;
    const aluno = new Aluno(nome, idade, nota);
    alunos.push(aluno);
    res.redirect("/alunos");
  }
}

export { alunos, AlunoController };
