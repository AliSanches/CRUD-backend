const UserService = require("../services/listar.js");

async function listar (req, res) {
    const dao = new UserService;

    const data = await dao.listar();
     
    if (data) {
        res.status(200).json(data);
    }
    else {
        res.status(204).json("NÃO ENCONTRADO!");
    }
}

async function listarPorNome (req, res) {
    const { pesquisa } = req.query;

    const dao = new UserService;

    const data = await dao.listarPorNome(pesquisa);
     
    if (data) {
        res.status(200).json(data);
    }
    else {
        res.status(204).json("NÃO ENCONTRADO!");
    }
}

async function cadastrar (req, res) {
    const values = [
        req.body.name,
        req.body.idade,
        req.body.email,
    ];

    const dao = new UserService;

    const data = await dao.cadastrar(values[0], values[1], values[2]);

    if (data) {
        res.status(200).json({ message: "USUÁRIO CADASTRADO!" });
    } else {
        res.status(204).json("FALHA AO CADASTRAR!");
    }
}

async function atualizar (req, res) {
    const { id } = req.params;
    
    const values = [
        req.body.name,
        req.body.idade,
        req.body.email,
    ];

    const dao = new UserService;

    const data = await dao.atualizar(id, values[0], values[1], values[2]);

    if (data) {
        res.status(200).json({ message: "USUÁRIOS ATUALIZADO" });
    } else {
        res.status(204).json("FALHA AO ATUALIZAR!");
    }
}

async function excluir (req, res) {
    const { id } = req.params;

    const dao = new UserService;

    const data = await dao.excluir(id);

    if (data) {
        res.status(200).json({ message: "DELETADO" });
    } else {
        res.status(204).json("FALHA AO DELETAR!");
    }
}

module.exports = {
    listar,
    listarPorNome,
    cadastrar, 
    atualizar, 
    excluir 
};