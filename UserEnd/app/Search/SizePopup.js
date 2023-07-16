import React from 'react'

function SizePopup({
    selectedItem,selectedDesign,
    size,setSize,customSize,setCustomSize,
    handleOrderConfirmation,
    setShowPopup,
    detailMessage,
    setDetailMessage
}) {
  return (
    <div  className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div  style={{width:"400px"}} className="bg-white p-8 rounded text-center">
      <h2 className="text-lg font-bold mb-4">Order Confirmation</h2>
      <p className="text-lg font-semibold mb-1">{selectedItem.name}</p>
      <p className="text-gray-500 mb-4">{selectedItem.distance} km</p>

      <h3 className="text-lg font-bold mb-2">Selected Design</h3>
      <div className="flex flex-col items-center">
        <img
          src={selectedDesign.image}
          alt="Design"
          className="w-40 h-40 object-cover mb-2"
        />
        <p className="text-lg font-semibold mb-1">${selectedDesign.price}</p>
        <p className="text-gray-500 mb-2">{selectedDesign.time}</p>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-4">Size</h3>
      <div className='flex '>
        <label className="block mb-2 m-3">
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === 'small'}
            onChange={(e) => setSize(e.target.value)}
          />
          Small
        </label>
        <label className="block mb-2 m-3">
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === 'medium'}
            onChange={(e) => setSize(e.target.value)}
          />
          Medium
        </label>
        <label className="block mb-2 m-3">
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === 'large'}
            onChange={(e) => setSize(e.target.value)}
          />
          Large
        </label>
        <label className="block mb-2 m-3">
          <input
            type="radio"
            name="size"
            value="custom"
            checked={size === 'custom'}
            onChange={(e) => setSize(e.target.value)}
          />
          Custom
        </label>
      </div>

      {size === 'custom' && (
        <div className="mb-4">
          <label className="block mb-2 m-3">
            Custom Size:
            <input
              type="text"
              value={customSize}
              onChange={(e) => setCustomSize(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 ml-2"
            />
          </label>
        </div>
      )}

      <h3 className="text-lg font-bold mb-2">Detail Message</h3>
      <textarea
        value={detailMessage}
        onChange={(e) => setDetailMessage(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 mb-4"
        rows={4}
      />

      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleOrderConfirmation}
        >
          Placed Order
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-white rounded ml-2"
          onClick={() => setShowPopup(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default SizePopup