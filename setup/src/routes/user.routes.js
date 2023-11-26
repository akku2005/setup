const Router = express.Router();
const registerUser = require('../controllers/user.controller.js')

const router = Router()
router.route("/register").post(registerUser)


module.exports={
    router
}