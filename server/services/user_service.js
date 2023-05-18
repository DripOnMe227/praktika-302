const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class UserService {
    
    async GetAllUser(require) {
        return Prisma_client.user.findMany({});
    }

    async CreateUser(req) {
        const { firstName, lastName, email, numberPhone, position, jobPlace } = req.body
        
        try {
            const user = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    numberPhone,
                    position,
                    jobPlace,
                    aboutPC: {}
                }
            })
            return user
        } catch (e) {
            return e
        }

    }
    async DelUser(require) {
        return PrismaClient.user.DelUser({});
    }
    async UpUser(require) {
        return PrismaClient.user.UpUser({});
    }
}

module.exports = new UserService;