const express = require('express');
const app = express();
const PORT = 8085;
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).json({message: "Welcome to the Library Management System"});
});
//app.all('*',(req,res)=>{
    //res.status(500).json({message: "Route not found"});
//});
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});