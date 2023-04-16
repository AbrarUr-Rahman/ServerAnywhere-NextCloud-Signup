const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/serveranywhere",{
    useNewUrlParser:true,
    UseUnifiedTopology:true

}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=> {
    console.log(e);
    console.log(`no connection`);
})