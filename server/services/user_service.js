const { PrismaClient } = require('@prisma/client')

const prisma_client = new PrismaClient()

class UserService {

    async GetAllUser() 
    {
        return prisma_client.user.findMany({});
    }

    async CreateUser(req) {
        const { firstName, lastName, email, numberPhone, position, jobPlace } = req.body

        try {
            var bHasEmail = await prisma_client.user.count(
                { "where": { "email": email } },

            ) > 0 ? true : false

            var bHasPhone = await prisma_client.user.count(
                { "where": { "numberPhone": numberPhone } },

            ) > 0 ? true : false
            if (bHasPhone) return { "ERROR": "PHONE EXISTS" }
            if (bHasEmail) return { "ERROR": "EMAIL EXISTS" }
            // у призмы есть много методов которые вы можете загуглить для создания используется
            // метод create 
            // для работы с бд используем prisma client потом выбираем таблицу с которой
            // будем работать в нашем случаее user после этого вызываем метод что хоти сделать
            const newUser = await prisma_client.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    numberPhone,
                    position,
                    jobPlace,
                    aboutPC: {}
                },
            })
            //если все успешно возвращаем пользователя обратно в контроллер
            return newUser
        } catch (e) {
            console.log(e)
            //return res.json({e})
        }
    }

    async DelUser(req) {
        const { id } = req.body;

        await prisma_client.user.deleteMany({ "where": { "id": id } })
        return { "error": "SUCCESS" }
    }

    async UpdateUser(req) {
        {
            const { id, key, val } = req.body;
            if (!key)
                return { "error": "KEY NOT PRESENT" }

            if (key == "id")
                return { "error": "You cannot change id" }

            if (key == "email" || key == "numberPhone") {
                if (await prisma_client.user.findFirst({"where": { [key] : val }}) ? true : false) {
                    return { "error": "ERROR - DUPLICATE" }
                }
            }

            var usr = await prisma_client.user.update({ "where": { "id": id }, "data": { [key]: val } })
            return usr
        }
    }
}
module.exports = new UserService;
