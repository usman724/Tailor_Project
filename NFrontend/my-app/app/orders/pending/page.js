import React, { useState, useEffect } from 'react';

function Pending() {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [pendingOrderstime, setPendingOrderstime] = useState(new Date());


  const generateOrders = () => {
    const currentDate = new Date();
    const orderDate = new Date();
    orderDate.setDate(currentDate.getDate() + 10); // Set order date 10 days after today

    const orders = [];

    for (let i = 1; i <= 10; i++) {
      const order = {
        id: i,
        customerName: `Customer ${i}`,
        orderDate: orderDate.toISOString(),
        orderItems: ['Item 1', 'Item 2'],
        completed: false,
        imageUrl: `https://example.com/image${i}.jpg`,
      };

      console.log('orders',order);
      orders.push(order);
    }

    setPendingOrders(orders);
  };

  useEffect(() => {
    generateOrders();
  }, []);

  const handleCompleteOrder = (orderId) => {
    const updatedOrders = pendingOrders.map((order) => {
      if (order.id === orderId) {
        return { ...order, completed: true };
      }
      return order;
    });
    setPendingOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = pendingOrders.filter((order) => order.id !== orderId);
    setPendingOrders(updatedOrders);
  };

  const getRemainingTime = (orderDate) => {
    const currentDate = new Date();
    const orderTime = new Date(orderDate);
    const remainingTime = orderTime - currentDate;
    
    console.log('remaing',remainingTime);

    return remainingTime;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the remaining time every minute
      setPendingOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          remainingTime: getRemainingTime(order.orderDate),
        }))
      );
    }, 60000); // 1 minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-2" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
      {pendingOrders.map((order) => (
        <div
          key={order.id}
          className={`bg-white rounded-lg shadow-md p-4 mb-4 ${
            order.completed ? 'bg-green-200' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
            {!order.completed && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleDeleteOrder(order.id)}
              >
                Delete
              </button>
            )}
          </div>
          <div className="flex items-center mb-2">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={order.imageUrl}
              alt="Customer Profile"
            />
            <p className="text-gray-700">{order.customerName}</p>
          </div>
          <p className="text-gray-700">Order Date: {order.orderDate}</p>
          <p className="text-gray-700">
            Order Items: {order.orderItems.join(', ')}
          </p>
          {!order.completed && (
            <div className="flex items-center">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 mr-2"
                onClick={() => handleCompleteOrder(order.id)}
              >
                Mark as Completed
              </button>
              {getRemainingTime(order.Date) > 0 && (
                <p className="text-red-500">
                  Remaining Time: {order.remainingTime} minutes
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pending;
