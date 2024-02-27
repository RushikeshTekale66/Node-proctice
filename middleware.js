module.exports =  ((req, res, next)=>{
    if (!req.query.age){
        res.send("<h1>Please provide your age! </h1>")
    }
    else if(req.query.age>18){
        res.send("<h1>Success</h1>");
    }
    else if(req.query.age<18){
        res.send("<h1>you are below 18</h1>");
    }
    else{
        next();
    }
    
})