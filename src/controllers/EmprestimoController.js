import { livros } from "./LivroController.js";
import { alunos } from "./AlunoController.js";

const emprestimos = [];

class Emprestimo {
    constructor(livro, aluno, dataEmprestimo, dataDevolucao) {
        this.id = crypto.randomUUID();
        this.livro = livro;
        this.aluno = aluno;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
}

class EmprestimoController {
    index(req, res) {
        return res.render("emprestimo", { emprestimos, livros, alunos });
    }

    cadastrarEmprestimo(req, res) {
        const { livroId, alunoId, dataEmprestimo, dataDevolucao } = req.body;

        const livro = livros.find((livro) => livro.id === livroId);
        const aluno = alunos.find((aluno) => aluno.id === alunoId);

        if (!livro.disponivel) {
            return res.status(400).send("Não há exemplares disponíveis para o livro.");
        }

        if (!livro || !aluno) {
            return res.status(400).send("Livro ou aluno não encontrado/inexistente");
        }

        if (!dataEmprestimo || !dataDevolucao) {
            return res.status(400).send("Data de empréstimo ou devolução inexistentes");
        }

        const emprestimo = new Emprestimo(livro, aluno, dataEmprestimo, dataDevolucao);
        emprestimos.push(emprestimo);

        livro.emprestar();

        res.redirect("/emprestimos");
    }
}

export { emprestimos, EmprestimoController };