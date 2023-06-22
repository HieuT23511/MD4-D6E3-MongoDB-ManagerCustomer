import { Router } from "express";
import { CustomerControllers } from "../controllers/customer.controllers";

export const webRouter = Router();

webRouter.get('/create', CustomerControllers.getCreateCustomerPage);
webRouter.post('/create', CustomerControllers.createNewCustomer);
webRouter.get("/list",CustomerControllers.getListCustomerPage);
webRouter.get("/list/:id",CustomerControllers.getListCustomerPage);
webRouter.get("/:id/update",CustomerControllers.getUpdateCustomerPage);
webRouter.post("/:id/update",CustomerControllers.updateCustomer);
webRouter.get("/:id/delete",CustomerControllers.deleteCustomer);
