class HomeController {
  index(req, res) {
    return res.render("home", {
      turmas: [
        { nome: "Informática", alunos: 43 },
        { nome: "Finanças", alunos: 42 },
        { nome: "Segurança", alunos: 40 },
      ],
    });
  }
}

export default HomeController;
