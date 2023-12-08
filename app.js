const express = require("express");
const morgan = require("morgan");

const app = express();

app.set('view engine', 'ejs');
app.set("views","./views");

// Routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/users/main");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",indexRouter);

//Users Authentication Routes
app.use("/users/signin",authRouter.signin);
app.use("/users/signup",authRouter.signup);

//Not Found Route
app.use((req,res,next)=>{
    res.status(404).send("404");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});