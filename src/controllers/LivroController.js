const livros = [];

class Livro {
  constructor(titulo, autor, ano, exemplares) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.autor = autor;
    this.ano = Number(ano);
    this.exemplares = Number(exemplares);
    this.emprestados = 0;
    this.disponiveis = this.exemplares - this.emprestados;
    this.disponivel = !!this.disponiveis;
    this.situacao = this.disponivel ? "Disponível" : "Todos emprestados";
  }
}

class LivroController {
  index(req, res) {
    res.render("livro", {
      livros: livros,
      total: livros.length,
      totalExemplares: livros
        .map((livro) => livro.examplares)
        .reduce((acc, value) => acc + value, 0),
    });
  }

  store(req, res) {
    const { titulo, autor, ano, exemplares } = req.body;
    const livro = new Livro(titulo, autor, ano, exemplares);
    livros.push(livro);
    res.redirect("/livros");
  }
}
export { livros, LivroController };