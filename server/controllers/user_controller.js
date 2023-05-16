const prisma = require("../prismaClient")

class UserController {
    async GetUser(req, res, next)
    {
        try {
            res.json("WORKED")
        } catch(e) {}
    }
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
}

module.exports = new UserController();
