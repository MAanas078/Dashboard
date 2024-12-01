import React from 'react';

const FilterBar = ({ onFilter }) => {
    return (
        <div className="flex gap-4 p-4 bg-gray-100 rounded shadow">
            <select
                className="p-2 border rounded"
                onChange={(e) => onFilter('state', e.target.value)}
            >
                <option value="">Select State</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Delhi">Delhi</option>
            </select>
            <select
                className="p-2 border rounded"
                onChange={(e) => onFilter('disease', e.target.value)}
            >
                <option value="">Select Disease</option>
                <option value="Fever">Fever</option>
                <option value="Covid-19">Covid-19</option>
                <option value="Cancer">Cancer</option>
            </select>
            <input
                type="number"
                placeholder="Year"
                className="p-2 border rounded"
                onChange={(e) => onFilter('year', e.target.value)}
            />
        </div>
    );
};

export default FilterBar;
