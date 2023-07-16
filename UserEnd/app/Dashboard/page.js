import React from 'react';
import { FaRegClock, FaCheck, FaStar, FaTruck } from 'react-icons/fa';
import Card  from '../widgets/card';

function Dashboard() {
  return (
   <>
    <div className="flex flex-wrap  gap-2 px-4 py-6 mt-4">
    
    <Card title="Pending Orders" icon="FaRegClock" value={20} color="white" />
    <Card title="Completed Orders" icon="FaCheck" value={30} color="white" />
    <Card title="Rating" icon="FaStar" value={4.5} color="white" />   
    <Card title="Today Deliveries" icon="FaTruck" value={3} color=" text-yellow-500" />

    </div>
   </>
  );
}

export default Dashboard;
