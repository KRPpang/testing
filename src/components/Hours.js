// src/RestaurantHours.js
import React from 'react';

function RestaurantHours() {
  const hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <div className="container mt-4">
      <h2>Restaurant Hours</h2>
      <ul className="list-unstyled">
        {hours.map((hour, index) => (
          <li key={index}>
            <strong>{hour.day}:</strong> {hour.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantHours;
