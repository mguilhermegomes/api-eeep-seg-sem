class AboutController {
  index(req, res) {
    res.render("about", {
      nomeEscola: "EEEP Lúcia Helena Viana Ribeiro",
      nomeCurso: "Informática",
      nomeAluno: "Guilherme Gomes",
    });
  }
}

export default AboutController;
