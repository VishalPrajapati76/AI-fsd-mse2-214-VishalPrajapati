import axios from 'axios';
import {useState,useEffect} from 'react';
import Navbar from './Navbar';
import GrievanceForm from './GrievanceForm';
import GrievanceList from './GrievanceList';
const API = import.meta.env.VITE_API_URL;

export default function Dashboard(){
const [list,setList]=useState([])
const [search,setSearch]=useState('')

const token=localStorage.getItem('token')
const headers={headers:{Authorization:`Bearer ${token}`}}

const loadData=async()=>{
const res=axios.get(`${API}/api/grievances`,headers)
setList(res.data)
}

useEffect(()=>{
loadData()
},[])

const addGrievance=async(form)=>{
axios.post(`${API}/api/grievances`,form,headers)
loadData()
}

const deleteGrievance=async(id)=>{
axios.delete(`${API}/api/grievances/${id}`,headers)
loadData()
}

const searchGrievance=async()=>{
if(!search.trim()){
loadData()
return
}

const res=axios.get(
`${API}/api/grievances/search?title=${search}`,
headers
)
setList(res.data)
}

return(
<>
<Navbar/>
<div style={{padding:'40px'}}>

<div className='card'>
<h2>Search Grievances</h2>
<input
className='input'
placeholder='Search by complaint title'
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button className='btn' onClick={searchGrievance}>
Search
</button>

<button
className='btn'
style={{marginTop:'12px'}}
onClick={()=>{
setSearch('')
loadData()
}}
>
Reset
</button>
</div>

<GrievanceForm onSubmit={addGrievance}/>

<GrievanceList
grievances={list}
onDelete={deleteGrievance}
onRefresh={loadData}
/>

</div>
</>
)
}