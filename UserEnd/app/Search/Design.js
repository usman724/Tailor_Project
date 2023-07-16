import React, { useState } from 'react';
import SizePopup from './SizePopup';

function Design({ selectedItem, handleClosePopup }) {
  const [orders, setOrders] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [size, setSize] = useState('');
  const [customSize, setCustomSize] = useState('');
  const [detailMessage, setDetailMessage] = useState('');

  const handleStartOrder = (design) => {
    setSelectedDesign(design);
    setShowPopup(true);
  };

  const handleOrderConfirmation = () => {
    // Create a new order object with tailor name, tailor id, design details, size, and detail message
    const order = {
      tailorName: selectedItem.name,
      tailorId: selectedItem.id,
      status: 'pending',
      design: {
        id: selectedDesign.id,
        image: selectedDesign.image,
        price: selectedDesign.price,
        time: selectedDesign.time,
      },
      size,
      customSize,
      detailMessage,
    };

    // Update the orders array with the new order
    setOrders((prevOrders) => [...prevOrders, order]);

    // Reset the form and close the popup
    setSelectedDesign(null);
    setSize('');
    setCustomSize('');
    setDetailMessage('');
    setShowPopup(false);

    // Display a success message or perform any desired actions
    console.log('Order placed successfully:', orders);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-lg font-bold mb-4">Order Details</h2>
        <p className="text-lg font-semibold mb-1">{selectedItem.name}</p>
        <p className="text-gray-500 mb-4">{selectedItem.distance} km</p>

        <h3 className="text-lg font-bold mb-2">Designs</h3>
        {selectedItem.designs.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {selectedItem.designs.map((design) => (
              <li
                key={design.id}
                className="border bg-gray-50 border-gray-300 rounded p-4 flex flex-col items-center"
              >
                <img src={design.image} alt="Design" className="w-40 h-40 object-cover mb-2" />
                <p className="text-lg font-semibold mb-1">${design.price}</p>
                <p className="text-gray-500 mb-2">{design.time}</p>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleStartOrder(design)}
                >
                  Start Order
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No designs available.</p>
        )}

        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4" onClick={handleClosePopup}>
          Close
        </button>
      </div>

      {showPopup && (
        <SizePopup 
        selectedItem={selectedItem}
        selectedDesign={selectedDesign}
        size={size}
        setSize={setSize}
        customSize={customSize}
        setCustomSize={setCustomSize}
        handleOrderConfirmation={handleOrderConfirmation}
        setShowPopup={setShowPopup}
        detailMessage={detailMessage}
        setDetailMessage={setDetailMessage}
        />
      )}
    </div>
  );
}

export default Design;
