import React from 'react';
import './Charges.css';

function getDollar(cost) {
    return "$" + cost.toLocaleString();
}

function getDifference(prevMonth, currMonth) {
    amt = (currMonth - prevMonth)/prevMonth;
    return amt.toLocaleString() + "%";
}

function Charges(props) {
    const { title, prevMonth, currMonth } = props;
    return (
        <div className="charges">
            
            <h3 className="current-title">{title}</h3>
            <h2 className="pending-count">{getDollar(cost)}</h2>
            <h4 className="pending-description">{count} reports in the queue</h4>
        </div>
    )
}

export default Charges
