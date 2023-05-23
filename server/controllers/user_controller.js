const { response } = require('express');
const userService = require('../services/user_service')

class UserController {
    async GetUser(req, res, next) 
    {
        try {
            res.json(await userService.GetAllUser())
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
            res.json(await userService.DelUser(req))
        } catch(e) {
            console.log(e)
            res.json({"error": "EXCEPTION"})
        }
    }
    async UpdateUser(req, res, next) 
    {
        try {
            res.json(await userService.UpdateUser(req))
        } catch(e) {
            console.log(e)
            res.json({"error": "EXCEPTION"})
        }
    }
}

module.exports = new UserController()