import React from 'react'

function Filter({selectedFilters,handleFilterSelection}) {
  return (
    <section className="mt-4">
    <h2 className="text-lg font-bold mb-2">Filter by</h2>
    <div className="flex space-x-4">
        <button
        className={`px-4 py-2 rounded-full ${
            selectedFilters.includes('price') ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
        }`}
        onClick={() => handleFilterSelection('price')}
        >
        Price
        </button>
        <button
        className={`px-4 py-2 rounded-full ${
            selectedFilters.includes('days') ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
        }`}
        onClick={() => handleFilterSelection('days')}
        >
        Days
        </button>
    </div>
    </section>
  )
}

export default Filter;