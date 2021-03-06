const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .post(usersController.updateAll)
  .delete(usersController.remove);

router.route("/usertype/:userType").get(usersController.findByUserType)

module.exports = router;
