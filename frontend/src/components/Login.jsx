import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Login(){

const [data,setData]=useState({
 email:"",
 password:""
});

const login = async (e) => {
 e.preventDefault();

 try{

  const res = await axios.post(
   `${API}/api/login`,
   data
  );

  console.log(res.data);

  localStorage.setItem("token",res.data.token);
  localStorage.setItem("studentName",res.data.name || "Student");
  localStorage.setItem("studentEmail",data.email);

  window.location.href="/dashboard";

 }catch(err){
   console.error(err);
   alert("Login failed");
 }

};

return(
<div className="auth-container">

<form className="auth-card" onSubmit={login}>

<h1>Student Grievance Portal</h1>

<p>Login to continue</p>

<input
className="input"
placeholder="Email"
onChange={(e)=>
setData({...data,email:e.target.value})
}
/>

<input
type="password"
className="input"
placeholder="Password"
onChange={(e)=>
setData({...data,password:e.target.value})
}
/>

<button type="submit" className="btn">
Login
</button>

<p style={{marginTop:"20px"}}>
New User?
<Link to="/register"> Create Account</Link>
</p>

</form>

</div>
)

}