const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()

class UserService {
    async createUser(username, fullname, email, password) {
        const user = await prisma.candidate.create({
            data: {
                username, fullname, email, password
            },
        })
        return user;
    }

    async findUser(filter) {
        const user = await prisma.candidate.findUnique({
            where: {
                email: filter
            }
        })
        return user
    }

    async deleteUser(filter) {

    }

    async updateUser(filter, data) {
        const user = await prisma.candidate.update({ where: { email: filter }, data })
        return user
    }
}

module.exports = new UserService();