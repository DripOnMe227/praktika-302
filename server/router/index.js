const Router = require("express").Router;
const router = Router();

const users = require("../controllers/user_controller");
router.get("/users", users.GetUser);
router.post("/adduser", users.AddUser);
router.delete("/deluser", users.DelUser);
router.post("/upuser", users.UpUser);

module.exports = router;