const express= require("express");
const axios= require("axios");



const path=require("path");
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 3002;

require("./db/conn");
const User= require("./models/usermessage");
const { exists } = require("./models/usermessage");

// path set //
const static_path =path.join(__dirname, "../public");
const template_path =path.join(__dirname, "../templates/views");
const partials_path =path.join(__dirname, "../templates/partials");

app.use(express.urlencoded({extended:false}));
// app.use(express.json("User"));

console.log(static_path);
 //midleware//
 app.use('/css',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
 app.use('/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
 app.use('/jq',express.static(path.join(__dirname, "../node_modules/jquery/dist")));
   app.use(express.json());

 app.use(express.static(static_path));

app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
res.render("index")

});
app.get("/contact",async(req,res)=>{
     const userData=new User(req.body);
     console.log();
    res.render("contact");
    
    });
 var username = 'abrar';
var password = 'abrar123'

const token = `${username}:${password}`;
const encodedToken = Buffer.from(token).toString('base64');

app.post("/contact", (req,res)=>{
        const userData=new User(req.body);
var postData = {
  userid: userData.name,
  // displayname:userData.displayname,
  password: userData.password,
  email:userData.email,
  quota:userData.quota
};

let axiosConfig = {
  headers: {
    'Authorization': 'Basic '+ encodedToken  ,
    'OCS-APIRequest':true
  }
};

 axios.post('http://103.191.240.104//ocs/v1.php/cloud/users', postData, axiosConfig).then(()=>{
          userData.save();
         
          res.render("index");
})

.then((res) => {
  console.log("RESPONSE RECEIVED: ", res);
})
.catch((err) => {
  console.log("AXIOS ERROR: ", err);
})
       
       });

       
// const signup=async()=>{
//     data= await axios.post('http://192.168.1.102/ocs/v1.php/cloud/users',{auth:{userid:"abrar",password:"abrar123"}},{
//          "userid":"abrar234",
//           "password":"abrar234123"
//      }).then(r=>console.log(r.data)).catch(err=>console.log(err));
    
//      console.log(data);
 
//  }

// app.post("/contact",async (req,res) => {
//     try{
//         //res.send(req.body);
//         const userData=new User(req.body);
//         await userData.save();
//         console.log(userData.name);
//         res.status(201).render("index");

//     }
// catch (error){
// res.status(500).send(error);

// }
// })



app.listen(port,()=>{
console.log( `server is running at port no ${port}`   );

})