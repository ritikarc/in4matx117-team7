import React from 'react';
import './Report.css';

function getDollar(dollars) {
    return "$" + dollars.toLocaleString() + "K";
}

function Report(props) {
    const {title, count, dollars, color1, color2} = props;

    return (
        <div className="report">
            <h3 className="report-title">{title}</h3>
            <div className="numbers">
                <div className="count-box" style={{"background-color":color1}}>
                    {count}
                </div>
                <div className="dollar-box" style={{"background-color":color2}}>
                    {getDollar(dollars)}
                </div>
            </div>
        </div>
    )
}

export default Report
