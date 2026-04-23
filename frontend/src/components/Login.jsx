import axios from 'axios';
const API = import.meta.env.VITE_API_URL;
import {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';

export default function Login(){
const nav=useNavigate();
const [data,setData]=useState({email:'',password:''});

const login=async(e)=>{
e.preventDefault();
const res = await axios.post(
`${API}/api/login`,
data
)
localStorage.setItem('token',res.data.token)
localStorage.setItem('studentName',res.data.name || 'Student')
localStorage.setItem('studentEmail',data.email)
window.location='/dashboard';
}

return(
<div className='auth-container'>
<form className='auth-card' onSubmit={login}>
<h1>Student Grievance Portal</h1>
<p>Login to manage your complaints</p>
<input className='input' placeholder='Email' onChange={e=>setData({...data,email:e.target.value})}/>
<input className='input' type='password' placeholder='Password' onChange={e=>setData({...data,password:e.target.value})}/>
<button className='btn'>Login</button>
<p style={{marginTop:20}}>New User? <Link to='/register'>Create Account</Link></p>
</form>
</div>
)}