"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerModel = void 0;
const mongoose_1 = require("mongoose");
const customerSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    tel: String,
});
exports.customerModel = (0, mongoose_1.model)("customer", customerSchema);
//# sourceMappingURL=customer.models.js.map