const prisma = require("../prismaClient");
const user_service = require("../services/user_service");

class UserController {    
    async CreateUser(req, res, next)
    {
        try {
            const user = await prisma.user.create({
                data:{
                  id: "e20a434e-f3e4-11ed-a05b-0242ac120003", 
                  firstName: "kirill", 
                  lastName: "cursed",
                  email: "qwerty@mail.ru",
                  numberPhone: "7921 1488 69 24",
                  position: "228",
                  jobPlace: "kick.com",
                }
              })
        } catch(e) {console.log(e)}
    }
    
    async GetUser(req, res, next)
    {
        try {
            res.json(await user_service.GetAllUsers())
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }

    async AddUser(req, res, next)
    {
        try {
            res.json({"endpoint": "adduser"})
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }

    async DelUser(req, res, next)
    {
        try {
            res.json({"endpoint": "deluser"})
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }

    async UpdateUser(req, res, next)
    {
        try {
            res.json({"endpoint": "upduser"})
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }
}

module.exports = new UserController();
