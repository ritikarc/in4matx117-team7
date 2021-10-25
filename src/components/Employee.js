import React from 'react';
 
const Employee = ({employee}) => {
   return (
       <div>
            {employee.name} | {employee.role}
        </div>
   );
};
 
export default Employee;