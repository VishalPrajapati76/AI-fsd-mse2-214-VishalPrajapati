import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Register(){
const [form,setForm]=useState({name:'',email:'',password:''})
const submit=async(e)=>{
e.preventDefault();
await axios.post('http://localhost:5000/api/register',form)
alert('Registration Successful')
}
return(
<div className='auth-container'>
<form className='auth-card' onSubmit={submit}>
<h1>Create Account</h1>
<p>Register grievance access portal</p>
<input className='input' placeholder='Name' onChange={e=>setForm({...form,name:e.target.value})}/>
<input className='input' placeholder='Email' onChange={e=>setForm({...form,email:e.target.value})}/>
<input className='input' type='password' placeholder='Password' onChange={e=>setForm({...form,password:e.target.value})}/>
<button className='btn'>Sign Up</button>
<p style={{marginTop:20}}>Already registered? <Link to='/'>Login</Link></p>
</form>
</div>
)}