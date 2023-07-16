import React, { useEffect, useState } from 'react';

import ImageUpload from '../widgets/imageUpload'
import Headingtext from '../widgets/Headingtext';
import Keyword from '../widgets/Keywords';
import DesignCard from '../widgets/DesignCard';



function DesignCategory() {
  const [isMale, setIsMale] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsMale(e.target.checked);
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <Headingtext text={'Selection'} />
      <div className='flex'>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            id="male"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={isMale}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="male" className="font-medium text-gray-700">
            Male
          </label>
        </div>
        <div className="flex ml-5 items-center space-x-4">
          <input
            type="checkbox"
            id="female"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={!isMale}
            onChange={(e) => setIsMale(!e.target.checked)}
          />
          <label htmlFor="female" className="font-medium text-gray-700">
            Female
          </label>
        </div>
      </div>
    </div>
  );
}

function Step2({ onPrevStep, image }) {
  const [price, setprice] = useState('');
  const [days, setdays] = useState('');
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
   
    const fetchDesigns = async () => {
      try {
        const response = await fetch('http://localhost:6500/Design');
        const data = await response.json();
        console.log('daat',data);
        setDesigns(data.designs);
      } catch (error) {
        console.log('Error fetching designs:', error);
      }
    };

    fetchDesigns();
  }, []);


  const hanlderdays = (e) => {
    setdays(e.target.value)
  }

  const hanlderprice = (e) => {
    setprice(e.target.value)
  }


  return (
    <div className="w-full flex   justify-center items-center">


      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-3 bg-gray-50 p-4 rounded-md">
          <Headingtext text={'Upload Desgin'} />
          <ImageUpload h={'40'} w={'60'} corner={'rounded-10'} />
          <DesignCategory />

          <input
            type="text"
            placeholder="Design Price"
            className="border border-gray-400 px-4 py-2 mt-4  mb-2 w-full"
            value={price}
            onChange={hanlderprice}
          />
          <input
            type="text"
            placeholder="Days Required"
            className="border border-gray-400 px-4 py-2  mb-2 w-full"
            value={days}
            onChange={hanlderdays}
          />

          <Keyword />


          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >

            Upload Design
          </button>

          

        </div>

        <div className="flex  col-span-9 bg-gray-50 p-4 rounded-md">

          
            {designs.map((design) => (
            <DesignCard
              key={design.tailor_id}
              image={design.imageUrl}
              price={design.designprice}
              keywords={JSON.parse(design.keywords).join(', ')}
              gender={design.gender}
            />
          ))}




        </div>
        
        <div className="flex m-4 float-right">
            <button
              className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={onPrevStep}
            >
              Previous
            </button>
           
          </div>

      </div>





    </div>
  );
}

export default Step2;
