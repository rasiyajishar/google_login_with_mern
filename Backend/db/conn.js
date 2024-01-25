const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose.connect(DB,{
  useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("databse connected"))
.catch((err)=>(console.log("error",err)))