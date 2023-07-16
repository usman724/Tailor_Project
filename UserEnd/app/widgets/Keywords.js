import React, { useState } from 'react';

function Keyword() {
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue) {
      setKeywords([...keywords, inputValue]);
      setInputValue('');
    } else if (event.key === 'Backspace' && !inputValue && keywords.length) {
      setKeywords(keywords.slice(0, keywords.length - 1));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className="block w-full py-2 pl-3 pr-10 leading-tight bg-white border border-gray-400 appearance-none focus:outline-none focus:border-blue-500"
          placeholder="Add a keyword"
        />
        <button
          type="button"
          className="absolute top-0 right-0 px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => {
            setKeywords([...keywords, inputValue]);
            setInputValue('');
          }}
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap mt-2">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="inline-block px-2 py-1 mr-2 mb-2 bg-gray-200 rounded-md text-gray-700"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Keyword;
