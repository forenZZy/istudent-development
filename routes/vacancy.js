const router = require("express").Router();
const vacancy = require("../controllers/vacancy");

router.get("/", vacancy.findAll);
router.post("/", vacancy.findVacancyByData)

module.exports = router;