const Student=require('../models/Student');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

exports.register=async(req,res)=>{
try{
 const {name,email,password}=req.body;

 let user=await Student.findOne({email});
 if(user)
 return res.status(400).json({message:'Duplicate Email'});

 const salt=await bcrypt.genSalt(10);
 const hashedPassword=await bcrypt.hash(password,salt);

 user=await Student.create({
  name,
  email,
  password:hashedPassword
 });

 res.json({message:'Registered Successfully'});
}
catch(err){
 res.status(500).json(err.message);
}
};

exports.login=async(req,res)=>{
try{
const {email,password}=req.body;

const user=await Student.findOne({email});
if(!user)
 return res.status(400).json({message:'Invalid Login'});

const match=await bcrypt.compare(password,user.password);
if(!match)
 return res.status(400).json({message:'Invalid Login'});

const token=jwt.sign(
{id:user._id},
process.env.JWT_SECRET,
{expiresIn:'1d'}
);

res.json({token,
    name:user.name,
    email:user.email

});

}
catch(err){
res.status(500).json(err.message);
}
};