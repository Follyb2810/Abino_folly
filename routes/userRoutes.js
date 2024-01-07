const express = require("express");
const { SignUp, SignIn, UpdateUser, protectedRoutes, Logout, folly, SingleUser } = require("../controller/authController");
const router = express.Router();

router.route("/signUp").post(SignUp)
router.route("/folly").get(folly)
router.route("/signIn").post(SignIn)
router.route("/logOut").get(Logout)
router.route("/singleUser").get(SingleUser)
router.route("/update/:userId").put(UpdateUser)

module.exports = router;
