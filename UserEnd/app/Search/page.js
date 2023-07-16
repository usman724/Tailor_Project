"use client"
import React, { useState } from 'react';
import data from './data';
import Filter from './filter';
import Design from './Design';

function Page() {
  const [rangeValue, setRangeValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const handleOrderClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleFilterSelection = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  

  const filterData = (item) => {
    if (selectedFilters.length === 0) {
      return true;
    }
    return selectedFilters.includes('price')
      ? item.designs.length > 0
      : selectedFilters.includes('days')
      ? item.designs.length === 0
      : true;
  };

  const filteredData = data.filter((item) => item.distance <= rangeValue && filterData(item));

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="p-4 flex flex-col justify-center items-center">
        <section>
          <h2 className="text-lg font-bold mb-2">Range Slider</h2>
          <input
          style={{width:"1000px"}}
            type="range"
            min={0}
            max={1000}
            value={rangeValue}
            onChange={handleRangeChange}
            className="w-64 h-6 bg-white rounded-full overflow-hidden appearance-none bg-gray-150"
          />
          <p className="mt-2">Range: {rangeValue} km </p>
        </section>

        <Filter 
        selectedFilters={selectedFilters}
        handleFilterSelection={handleFilterSelection}
        />


        <section className="mt-8 " >
          <h2 className="text-lg font-bold mb-2">Tailor Available</h2>
          {filteredData.length > 0 ? (
            <ul style={{maxHeight:"400px",overflow:"auto",padding:"10px"}}  className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredData.map((item) => (
                <li key={item.id} className="bg-white border border-gray-100 rounded px-6 py-2 flex flex-col items-center">
                  {/* Profile Pic */}
                  <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>

                  {/* Name */}
                  <p className="text-lg font-semibold mb-1">{item.name}</p>

                  {/* Distance */}
                  <p className="text-gray-500">{item.distance} km</p>

                  {/* Availability */}
                  <div className="flex items-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-1 ${
                        item.availability ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    ></span>
                    <p className="text-sm">{item.availability ? 'Available' : 'Not available'}</p>
                  </div>

                  {/* Button */}
                  {item.availability && (
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                      onClick={() => handleOrderClick(item)}
                    >
                      Design
                    </button>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No data available.</p>
          )}
        </section>

        {selectedItem && (
        <Design 
        selectedItem={selectedItem}
        handleClosePopup={handleClosePopup}
        />
        )}
      </div>
    </div>
  );
}

export default Page;
