"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerControllers = void 0;
const customer_models_1 = require("../models/schemas/customer.models");
class CustomerControllers {
    static async getCreateCustomerPage(req, res) {
        res.render("create");
    }
    static async createNewCustomer(req, res) {
        try {
            const customer = new customer_models_1.customerModel(req.body);
            if (customer) {
                await customer.save();
                res.redirect("/customer/list");
            }
            else {
                res.render("notfound");
            }
        }
        catch (err) {
            res.render("notfound");
        }
    }
    static async getListCustomerPage(req, res) {
        try {
            let listCustomer = await customer_models_1.customerModel.find();
            const limit = 2;
            const totalCustomer = listCustomer.length;
            const totalPage = Math.ceil(totalCustomer / limit);
            const currentPage = req.params.id;
            const offset = (currentPage - 1) * limit;
            const dataDisplay = await customer_models_1.customerModel.find().limit(limit).skip(offset);
            res.render("list", { customers: dataDisplay, pages: totalPage, currentPage: currentPage });
        }
        catch (err) {
            res.render("notfound");
        }
    }
    static async getUpdateCustomerPage(req, res) {
        try {
            console.log(req.params);
            const customer = await customer_models_1.customerModel.findOne({ _id: req.params.id });
            if (customer) {
                res.render("update", ({ customer: customer }));
            }
            else {
                res.render("notfound");
            }
        }
        catch (err) {
            res.render("notfound");
        }
    }
    static async updateCustomer(req, res) {
        try {
            const customer = await customer_models_1.customerModel.findOne({ _id: req.params.id });
            let { name, email, tel } = req.body;
            customer.name = name;
            customer.email = email;
            customer.tel = tel;
            customer.save();
            res.redirect("/customer/list");
        }
        catch (err) {
            res.render("notfound");
        }
    }
    static async deleteCustomer(req, res) {
        const customer = await customer_models_1.customerModel.findOne({ _id: req.params.id });
        customer.deleteOne({ _id: req.params.id });
        res.redirect("/customer/list");
    }
}
exports.CustomerControllers = CustomerControllers;
//# sourceMappingURL=customer.controllers.js.map