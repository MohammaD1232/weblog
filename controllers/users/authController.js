const signin = (req,res,next)=>{
    res.render("users/auth/signin",{title:"Sign In"});
}

const signup = (req,res,next)=>{
    res.render("users/auth/signup",{title:"Sign Up"});
}
const logout = (req,res,next)=>{
    res.render("users/auth/logout");
}

module.exports = { signin, signup, logout }