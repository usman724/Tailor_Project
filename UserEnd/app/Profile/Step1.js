import React, { useState } from 'react';
import ImageUpload from '../widgets/imageUpload'




function Step1({ onNextStep }) {
  const [shopName, setShopName] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [shopLogo, setShopLogo] = useState(null);
  const [shopDescription, setShopDescription] = useState('');

  const handleNameChange = (event) => {
    setShopName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setShopAddress(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleLogoUpload = (event) => {
    setShopLogo(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setShopDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('shopName', shopName);
    formData.append('shopAddress', shopAddress);
    formData.append('contactNumber', contactNumber);
    formData.append('shopLogo', shopLogo);
    formData.append('shopDescription', shopDescription);
    onNextStep(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Step 1: Enter your shop details</h2>
      <form className="flex flex-col justify-center items-center"  onSubmit={handleSubmit}>
      
      
      <div className="mb-4">
          <ImageUpload/>
        </div>
      
        <input
          type="text"
          placeholder="Shop Name"
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-64"
          onChange={handleNameChange}
          value={shopName}
        />
        <input
          type="text"
          placeholder="Shop Address"
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-64"
          onChange={handleAddressChange}
          value={shopAddress}
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-64"
          onChange={handleContactNumberChange}
          value={contactNumber}
        />
        
   
        <textarea
          placeholder="Shop Description"
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-64"
          onChange={handleDescriptionChange}
          value={shopDescription}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          // disabled={!shopName || !shopAddress || !contactNumber}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Step1;
