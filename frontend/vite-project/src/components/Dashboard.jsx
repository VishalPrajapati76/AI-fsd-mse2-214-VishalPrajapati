import axios from 'axios';
import {useEffect,useState} from 'react';

function Dashboard(){

const [list,setList]=useState([])
const [title,setTitle]=useState('')
const [description,setDescription]=useState('')
const [category,setCategory]=useState('Academic')
const [search,setSearch]=useState('')

const token=localStorage.getItem('token')

const headers={
headers:{
Authorization:`Bearer ${token}`
}
}

const loadData=async()=>{
const res=await axios.get(
'http://localhost:5000/api/grievances',
headers
)
setList(res.data)
}

useEffect(()=>{
loadData()
},[])

const submitGrievance=async()=>{
await axios.post(
'http://localhost:5000/api/grievances',
{title,description,category},
headers
)
loadData()
}

const deleteGrievance=async(id)=>{
await axios.delete(
`http://localhost:5000/api/grievances/${id}`,
headers
)
loadData()
}

const searchData=async()=>{
const res=await axios.get(
`http://localhost:5000/api/grievances/search?title=${search}`,
headers
)
setList(res.data)
}

const logout=()=>{
localStorage.removeItem('token')
window.location='/'
}

return(
<div>
<h1>Student Dashboard</h1>

<input
placeholder='Title'
onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
placeholder='Description'
onChange={(e)=>setDescription(e.target.value)}
/>

<select onChange={(e)=>setCategory(e.target.value)}>
<option>Academic</option>
<option>Hostel</option>
<option>Transport</option>
<option>Other</option>
</select>

<button onClick={submitGrievance}>
Submit
</button>

<hr/>

<input
placeholder='Search'
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={searchData}>
Search
</button>

{
list.map(item=>(
<div key={item._id}>
<h3>{item.title}</h3>
<p>{item.description}</p>
<p>{item.category}</p>
<p>{item.status}</p>

<button
onClick={()=>deleteGrievance(item._id)}>
Delete
</button>

</div>
))
}

<button onClick={logout}>
Logout
</button>

</div>
)
}

export default Dashboard