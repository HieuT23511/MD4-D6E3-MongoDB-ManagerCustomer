import express from "express";
import bodyParser from "body-parser";
import { Database } from "./src/models/data-source";
import { webRouter } from "./src/routers/web.routers";

const app = express();
const PORT = 3000;

app.set("view engine","ejs");
app.set("views","./src/views");
app.use(bodyParser.urlencoded({extended:true}));

Database.connectDB()
.then(()=>console.log(`DB connected!`))
.catch((err)=>console.log(`DB connected error: ${err}`));

app.use("/customer", webRouter)

app.listen(PORT,"localhost",()=>{
    console.log(`App is running at : http://localhost:${PORT}/customer/create`);
    
})