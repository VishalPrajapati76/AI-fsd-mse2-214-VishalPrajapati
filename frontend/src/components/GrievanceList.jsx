import {useState} from 'react';
import axios from 'axios';

export default function GrievanceList({grievances,onDelete,onRefresh}){
const [openId,setOpenId]=useState(null)
const [editing,setEditing]=useState(null)
const [editForm,setEditForm]=useState({title:'',description:'',category:''})
const token=localStorage.getItem('token')
const headers={headers:{Authorization:`Bearer ${token}`}}

const startEdit=(g)=>{
setEditing(g._id)
setEditForm({
 title:g.title,
 description:g.description,
 category:g.category
})
}

const saveUpdate=async(id)=>{
await axios.put(
`http://localhost:5000/api/grievances/${id}`,
editForm,
headers
)
onRefresh()
setEditing(null)
}
return(
<div className='card'>
<h2>My Complaints</h2>
{grievances.map(item=>(
<div className='grievance-item' key={item._id}>
<div style={{display:'flex',justifyContent:'space-between'}}>
<h3>{item.title}</h3>
<button onClick={()=>setOpenId(openId===item._id?null:item._id)}>
{openId===item._id?'Close':'Open'}
</button>
</div>

{openId===item._id && editing!==item._id && (
<>
<p>{item.description}</p>
<p>Category: {item.category}</p>
<p>Status: {item.status}</p>
<div className='actions'>
<button onClick={()=>startEdit(item)}>Update</button>
<button onClick={()=>onDelete(item._id)}>Delete</button>
</div>
</>

)}

{editing===item._id && (
<>
<input className='input' value={editForm.title}
onChange={e=>setEditForm({...editForm,title:e.target.value})}/>
<textarea className='input' value={editForm.description}
onChange={e=>setEditForm({...editForm,description:e.target.value})}/>
<select className='input' value={editForm.category}
onChange={e=>setEditForm({...editForm,category:e.target.value})}>
<option>Academic</option><option>Hostel</option><option>Transport</option><option>Other</option>
</select>
<button onClick={()=>saveUpdate(item._id)}>Save</button>
</>
)}

</div>
))}
</div>
)}