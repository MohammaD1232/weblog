const index = (req,res,next) =>{
    res.render("index",{title:"Home"});
}

module.exports.index = index;