import React, { useState } from 'react';
import CustomChart from '../component/ChartComponent';
import FilterBar from '../component/FilterBar';
import SummaryCard from '../component/SummaryCard';
import MapComponent from '../component/MapComponent';

// Dummy data with latitude and longitude added for map markers
const dummyData = [
  { year: 2020, state: 'Uttar Pradesh', disease: 'Fever', cases: 5000, deaths: 200, latitude: 27.1591, longitude: 79.0193 },
  { year: 2021, state: 'Bihar', disease: 'Covid-19', cases: 6000, deaths: 250, latitude: 25.0961, longitude: 85.3131 },
  { year: 2021, state: 'Delhi', disease: 'Cancer', cases: 3000, deaths: 100, latitude: 28.6139, longitude: 77.2090 },
];

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(dummyData);

  // Filter function to dynamically filter data
  const handleFilter = (key, value) => {
    const filtered = dummyData.filter((item) => {
      return value ? item[key] === value : true;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Disease Dashboard</h1>
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-3 gap-4 my-6">
        <SummaryCard title="Total Cases" value={filteredData.reduce((sum, item) => sum + item.cases, 0)} />
        <SummaryCard title="Total Deaths" value={filteredData.reduce((sum, item) => sum + item.deaths, 0)} />
        <SummaryCard title="States Covered" value={new Set(filteredData.map(item => item.state)).size} />
      </div>
      <CustomChart data={filteredData} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Hotspot Map</h2>
        <MapComponent data={filteredData} /> {/* Pass filteredData to MapComponent */}
      </div>
    </div>
  );
};

export default Dashboard;
