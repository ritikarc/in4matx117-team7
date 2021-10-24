import React, { useState } from 'react';

const AddEmployee = ({ addEmployee }) => {
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if (!name) {
        alert('Please add a Name')
        return
      }
  
      addEmployee({name, cost})
  
      setName('')
      setCost('')
    }


    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Employee..."/>
            <input type="number" onChange={(e) => setCost(e.target.value)} value={cost} placeholder="Enter Cost"/>
            <button>Submit</button>
        </form>
    );
}

export default AddEmployee;