import { Schema,model } from "mongoose";

interface ICustomer {
    name: string;
    email: string;
    tel : string;
}

const customerSchema = new Schema <ICustomer> ({
    name: String,
    email: String,
    tel: String,
})

export const customerModel = model ("customer",customerSchema);
