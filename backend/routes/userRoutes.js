"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userController_1 = require("../controllers/userController");
var authMiddleware_1 = require("../middleware/authMiddleware");
router.route('/').post(userController_1.registerUser).get(authMiddleware_1.protect, authMiddleware_1.admin, userController_1.getUsers);
router.post('/login', userController_1.authUser);
router
    .route('/:id')["delete"](authMiddleware_1.protect, authMiddleware_1.admin, userController_1.deleteUser)
    .get(authMiddleware_1.protect, authMiddleware_1.admin, userController_1.getUserById)
    .put(authMiddleware_1.protect, authMiddleware_1.admin, userController_1.updateUser);
exports["default"] = router;
