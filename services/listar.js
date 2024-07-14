const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserService {

    async listar() {
        let query = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                idade: true,
                email: true
            },
        });

        return query;
    }

    async listarPorNome(pesquisa) {
        let query = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                idade: true,
                email: true
            },
            where: {
                name: {
                    contains: pesquisa
                }
            }
        });

        return query;
    }

    async cadastrar(nome, idade, email) {
        let query = await prisma.user.create({
            data: {
                name: nome,
                idade: parseInt(idade),
                email: email
            }
        });

        return query;
    }

    async atualizar(id, nome, idade, email) {
        let query = await prisma.user.update ({
            where: {
                id: parseInt(id),
            },
            data: {
                name: nome,
                idade: parseInt(idade),
                email: email,
            }
        });

        return query;
    }

    async excluir(id) {
        let query = await prisma.user.delete ({
            where: {
                id: parseInt(id),
            }
        });

        return query;
    }
}

module.exports = UserService;