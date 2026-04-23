const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
try{
let token=req.header('Authorization');

if(!token)
 return res.status(401).json({msg:'Unauthorized'});

token=token.replace('Bearer ','');

const decoded=jwt.verify(token,process.env.JWT_SECRET);
req.user=decoded.id;
next();

}
catch{
res.status(401).json({msg:'Unauthorized'});
}
}