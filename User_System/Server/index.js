const express = require("express")
const app = express()

const cors = require('cors');
app.use(cors({
  origin : ["https://mian-medical-store.netlify.app"],
  methods : ["GET" , "POST" , "DELETE" , "PATCH"]
}))


app.use(express.json())

const Router = require("./router/router")
app.use("/" , Router)

const connect = require("./db/connect")
const start = async () => {
   try {
    await connect("mongodb+srv://mian_taimoor_20:king@mycluster.edewh2u.mongodb.net/Medical_Store?retryWrites=true&w=majority")
    console.log("db Cobbected");
    app.listen(5000 , () => {
        console.log("Server Running");
    })
   } catch (error) {
    console.log(error);
   }
}

start()
