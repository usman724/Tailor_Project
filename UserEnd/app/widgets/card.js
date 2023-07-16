import { FaRegClock, FaCheck, FaStar, FaTruck } from 'react-icons/fa';

function Card({ title, icon, value, color }) {
  return (
    <div className={`w-full h-40 sm:w-1/2 md:mx-4 md:w-1/4 bg-${color} rounded-lg shadow-md px-6 py-4 flex flex-col justify-center items-center`}>
      <div className="text-2xl text-gray-700 font-bold mb-2">{title}</div>
      <div className="flex items-center text-gray-500">
        {icon === 'FaRegClock' && <FaRegClock size={30} />}
        {icon === 'FaCheck' && <FaCheck size={20} />}
        {icon === 'FaStar' && <FaStar size={20} />}
        {icon === 'FaTruck' && <FaTruck size={20} />}
        <span className="ml-2 text-2xl">{value}</span>
      </div>
    </div>
  );
}

export default Card;
