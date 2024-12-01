import React from 'react';

const SummaryCard = ({ title, value }) => {
    return (
        <div className="p-4 bg-blue-100 rounded shadow">
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
};

export default SummaryCard;
