const express = require("express");
const { listar, listarPorNome, cadastrar, atualizar, excluir } = require("../controllers/users");

const router = express.Router();

router.get('/', listarPorNome);
router.post('/', cadastrar);
router.put('/:id', atualizar);
router.delete('/:id', excluir);

module.exports = router;