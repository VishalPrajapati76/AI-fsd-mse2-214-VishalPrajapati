import {useState} from 'react';

export default function Navbar(){
const [show,setShow]=useState(false)
const userName=localStorage.getItem('studentName')||'Student User'
const userEmail=localStorage.getItem('studentEmail')||'student@mail.com'

return(
<nav style={{padding:'20px 40px',background:'#111827',color:'white',display:'flex',justifyContent:'space-between'}}>
<h2>Student Grievance Portal</h2>
<div style={{position:'relative'}}>
<button onClick={()=>setShow(!show)}>Profile</button>
{show && (
<div style={{position:'absolute',right:0,top:'50px',background:'white',color:'black',padding:'20px',borderRadius:'14px',width:'260px'}}>
<h4>{userName}</h4>
<p>{userEmail}</p>
<hr/>
<button style={{display:'block',marginTop:'10px'}}>Change Password</button>
<button style={{display:'block',marginTop:'10px'}}>Forgot Password</button>
<button
style={{display:'block',marginTop:'10px'}}
onClick={()=>{
localStorage.clear();
window.location='/'
}}

>Logout</button>
</div>
)}
</div>
</nav>
)
}