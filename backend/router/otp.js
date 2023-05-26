const otpcontroller = require("../controllers/otp")
const router = require("express").Router();
router.post('/send', otpcontroller.send)
router.post('/verify', otpcontroller.verify)
router.post('/verifygmail', otpcontroller.verifygmail)
router.post('/otpverify', otpcontroller.otpverify)

module.exports = router