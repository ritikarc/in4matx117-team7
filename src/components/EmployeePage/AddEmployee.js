import React, { useState } from 'react';

const AddEmployee = ({ addEmployee }) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if (!name) {
        alert('Please add a Name')
        return
      }
  
      addEmployee({name, role})
  
      setName('')
      setRole('')
    }


    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Employee..."/>
            <input type="text" onChange={(e) => setRole(e.target.value)} value={role} placeholder="Enter Role"/>
            <button>Add Employee</button>
        </form>
    );
}

export default AddEmployee;