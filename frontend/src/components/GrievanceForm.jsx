import {useState} from 'react';

export default function GrievanceForm({onSubmit}){

const [form,setForm]=useState({
title:'',
description:'',
category:'Academic'
})

const handleSubmit=(e)=>{
e.preventDefault();
onSubmit(form)
setForm({
title:'',description:'',category:'Academic'
})
}

return(
<form onSubmit={handleSubmit} className='card'>
<h2>Submit Grievance</h2>

<input
className='input'
value={form.title}
placeholder='Complaint Title'
onChange={(e)=>setForm({...form,title:e.target.value})}
/>

<textarea
className='input'
value={form.description}
placeholder='Description'
onChange={(e)=>setForm({...form,description:e.target.value})}
/>

<select
className='input'
value={form.category}
onChange={(e)=>setForm({...form,category:e.target.value})}
>
<option>Academic</option>
<option>Hostel</option>
<option>Transport</option>
<option>Other</option>
</select>

<button className='btn'>Submit</button>
</form>
)
}