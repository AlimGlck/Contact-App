import React, { useState } from 'react'


function Form({ addContact,contact }) {
    
    const [form,setForm] = useState({fullname:'',phone_number:''});
    const onChangeInput = (e) =>{
        setForm({...form,[e.target.name]:e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        addContact([...contact,form]);
        setForm({fullname:'',phone_number:''});
    };
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
            name = 'fullname' 
            placeholder = 'Fullname' 
            onChange = {onChangeInput} 
            value = {form.fullname}
            />
        </div>
        <div>
            <input 
            name = 'phone_number' 
            placeholder = 'Number' 
            onChange = {onChangeInput}
            value = {form.phone_number}
            />    
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form;
