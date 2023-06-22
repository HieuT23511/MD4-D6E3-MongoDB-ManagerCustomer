import { customerModel } from "../models/schemas/customer.models";

export class CustomerControllers {
    static async getCreateCustomerPage (req:any, res:any){
        res.render("create")
    }

    static async createNewCustomer (req:any, res:any){
        // console.log(req.body);
        try {
            const customer = new customerModel(req.body);   
            if(customer){
                await customer.save();
                res.redirect("/customer/list")
            } else {
                res.render("notfound")
            }  
        } catch(err){
            res.render("notfound")
        }
    }

    static async getListCustomerPage (req:any, res:any){
        try{
            let listCustomer = await customerModel.find();
            const limit = 2;
            const totalCustomer = listCustomer.length;
            const totalPage = Math.ceil(totalCustomer/limit);
            const currentPage = req.params.id
            const offset =  (currentPage-1)*limit;
            const dataDisplay = await customerModel.find().limit(limit).skip(offset);
            res.render("list",{customers:dataDisplay, pages:totalPage, currentPage: currentPage})
        } catch(err){
            res.render("notfound")
        }
    }

    static async getUpdateCustomerPage(req:any, res:any){
        try{
            console.log(req.params);
            const customer = await customerModel.findOne({_id: req.params.id});
            if(customer){
                res.render("update",({customer:customer}));
            } else {
                res.render("notfound");
            }
        } catch(err){
            res.render("notfound");
        }     
    }
    static async updateCustomer(req:any, res:any){
        try{
            const customer = await customerModel.findOne({_id: req.params.id});
            // console.log(req.body);
            let {name,email,tel} = req.body;
            customer.name = name;
            customer.email = email;
            customer.tel = tel;
            customer.save();
            res.redirect("/customer/list")
        } catch(err){
            res.render("notfound");
        }
    }
    static async deleteCustomer(req:any, res:any){
        const customer = await customerModel.findOne({_id: req.params.id});
        customer.deleteOne({_id: req.params.id})
        res.redirect("/customer/list")
    }
}