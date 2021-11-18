import React from 'react';
import './TotalEmployee.css';

function TotalEmployee(props) {
    const {title, total, verified} = props;

    return (
        <div id="totalemployee">
            <h3 id="totalemployee-title">{title}</h3>
            <h2 id="totalemployee-count">{total}</h2>
            <h4 id="totalemployee-description">{verified} employees are verified</h4>
        </div>
    )
}

export default TotalEmployee
