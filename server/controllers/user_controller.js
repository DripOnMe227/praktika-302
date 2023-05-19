const { response } = require('express');
const userService = require('../services/user_service')

class UserController {
    async GetUser(req, res, next) {
        try {
            res.json(await userService.getallusers())
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }

    async AddUser(req, res, next) {
        try {
            res.json(await userService.CreateUser(req))
        } catch (e) {
            console.log(e)
        }
    }
    async DelUser(req, res, next) {
        try {
            res.json(await userService.deleteUsers())
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }
    async UpUser(req, res, next) {
        const { email, age } = changes
        try {
            const user = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    email,
                    profile: {
                        update: {
                            age
                        }
                    }
                },
                select: {
                    email: true
                },
                include: {
                    profile: true
                }
            })
            return user
        } catch (e) {
            res.json(await userService.update(req))

            res.json({ "error": "EXCEPTION" })
        }
    }
}

module.exports = new UserController()