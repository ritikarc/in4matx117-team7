import React from 'react';
import './Pending.css';

function getDollar(cost) {
    return "$" + cost.toLocaleString();
}

function Pending(props) {
    const { title, cost, count } = props;
    return (
        <div className="pending">
            <h3 className="pending-title">{title}</h3>
            <h2 className="pending-count">{getDollar(cost)}</h2>
            <h4 className="pending-description">{count} reports in the queue</h4>
        </div>
    )
}

export default Pending
