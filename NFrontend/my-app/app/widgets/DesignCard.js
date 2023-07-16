import React from 'react';

function DesignCard({ image, price, keywords, gender }) {
  const keywordsArray = keywords.split(',');

  return (
    <div style={{ width: "200px" ,height:"400px" }} 
    className="card flex m-3 flex-col w-300 bg-white rounded-lg shadow-md p-4">
      <img src={image} alt="Design" className="card-image w-100 h-auto rounded-lg mb-4" />
      <div className="card-details">
        <div className="card-price text-lg font-bold mb-2">Price: {price}</div>
        <div className="card-keywords mb-2">
        
          Keywords: {' '}
          <br/>
          {keywordsArray.map((keyword, index) => (
            <span key={index} className="inline-block bg-blue-500 text-white text-sm rounded-md px-3 py-1 mr-2 mt-2">
              {keyword}
            </span>
          ))}
        </div>
        <div className="card-gender">Gender: {gender}</div>
      </div>
    </div>
  );
}

export default DesignCard;
