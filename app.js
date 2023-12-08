const express = require("express");
const morgan = require("morgan");

const app = express();

app.set('view engine', 'ejs');
app.set("views","./views");

// Routes
const indexRouter = require("./routes/index");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",indexRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});