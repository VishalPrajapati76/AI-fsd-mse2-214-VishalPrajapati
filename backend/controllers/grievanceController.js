const Grievance=require('../models/Grievance');

exports.createGrievance=async(req,res)=>{
const grievance=await Grievance.create({
...req.body,
user:req.user
});

res.json(grievance);
}

exports.getGrievances=async(req,res)=>{
const grievances=await Grievance.find({user:req.user});
res.json(grievances);
}

exports.getSingle=async(req,res)=>{
const grievance=await Grievance.findById(req.params.id);
res.json(grievance);
}

exports.updateGrievance=async(req,res)=>{
const grievance=await Grievance.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);
res.json(grievance);
}
exports.deleteGrievance=async(req,res)=>{
await Grievance.findByIdAndDelete(req.params.id);
res.json({message:'Deleted'});
}

exports.searchGrievance=async(req,res)=>{
const data=await Grievance.find({
 title:{$regex:req.query.title,$options:'i'}
});
res.json(data);
}