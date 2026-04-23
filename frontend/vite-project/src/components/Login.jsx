import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){

const nav=useNavigate();

const [data,setData]=useState({
email:'',
password:''
})

const login=async(e)=>{
e.preventDefault();

const res=await axios.post(
'http://localhost:5000/api/login',
data
)

localStorage.setItem('token',res.data.token)
nav('/dashboard')
}

return(
<form onSubmit={login}>
<input
placeholder='Email'
onChange={(e)=>setData({...data,email:e.target.value})}
/>

<input
type='password'
placeholder='Password'
onChange={(e)=>setData({...data,password:e.target.value})}
/>

<button>Login</button>
</form>
)
}

export default Login