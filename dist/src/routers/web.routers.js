"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webRouter = void 0;
const express_1 = require("express");
const customer_controllers_1 = require("../controllers/customer.controllers");
exports.webRouter = (0, express_1.Router)();
exports.webRouter.get('/create', customer_controllers_1.CustomerControllers.getCreateCustomerPage);
exports.webRouter.post('/create', customer_controllers_1.CustomerControllers.createNewCustomer);
exports.webRouter.get("/list", customer_controllers_1.CustomerControllers.getListCustomerPage);
exports.webRouter.get("/list/:id", customer_controllers_1.CustomerControllers.getListCustomerPage);
exports.webRouter.get("/:id/update", customer_controllers_1.CustomerControllers.getUpdateCustomerPage);
exports.webRouter.post("/:id/update", customer_controllers_1.CustomerControllers.updateCustomer);
exports.webRouter.get("/:id/delete", customer_controllers_1.CustomerControllers.deleteCustomer);
//# sourceMappingURL=web.routers.js.map