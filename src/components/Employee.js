import React from 'react';
 
const Employee = ({employee}) => {
   return (
       <div>
            {employee.name} , ${employee.cost}
        </div>
   );
};
 
export default Employee;