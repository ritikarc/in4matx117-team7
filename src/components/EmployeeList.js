import React from 'react';
import Employee from './Employee';
 
const EmployeeList = ({employeeList}) => {
   return (
       <div>
           {employeeList.map(employee => {
               return (
                   <Employee employee={employee} />
               )
           })}
       </div>
   );
};
 
export default EmployeeList;