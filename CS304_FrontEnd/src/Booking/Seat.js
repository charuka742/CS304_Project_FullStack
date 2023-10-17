import React from 'react';
import classNames from 'classnames';

const Seat = ({ seat, onClick }) => {
  const seatClass = classNames('rounded-lg py-2 px-4 cursor-pointer', {
    'bg-gray-300': seat.isBooked,
    'bg-green-500': !seat.isBooked,
    'opacity-50 cursor-default': seat.isBooked,
  });

  return (
    <div className={seatClass} onClick={onClick}>
      <p className="text-lg font-bold">{seat.id}</p>
    </div>
  );
};

export default Seat;


// const [seats, setSeats] = useState([
    
//     { id: 'A1', isBooked: false },
//     { id: 'A2', isBooked: false },
//     { id: 'A3', isBooked: true },
//     { id: 'A4', isBooked: false },
//     { id: 'A5', isBooked: false },
//     { id: 'A6', isBooked: false },
//     { id: 'A7', isBooked: false },
//     { id: 'A8', isBooked: true },
//     { id: 'A9', isBooked: false },
//     { id: 'A10', isBooked: false },
//     { id: 'A11', isBooked: false },
//     { id: 'A12', isBooked: false },
//     { id: 'A13', isBooked: true },
//     { id: 'A14', isBooked: false },
//     { id: 'A15', isBooked: false },
//     { id: 'B1', isBooked: false },
//     { id: 'B2', isBooked: false },
//     { id: 'B3', isBooked: false },
//     { id: 'B4', isBooked: false },
//     { id: 'B5', isBooked: true },
//     { id: 'B6', isBooked: false },
//     { id: 'B7', isBooked: false },
//     { id: 'B8', isBooked: false },
//     { id: 'B9', isBooked: false },
//     { id: 'B10', isBooked: true },
//     { id: 'B11', isBooked: false },
//     { id: 'B12', isBooked: false },
//     { id: 'B13', isBooked: false },
//     { id: 'B14', isBooked: false },
//     { id: 'B15', isBooked: true },
//     { id: 'C1', isBooked: false },
//     { id: 'C2', isBooked: false },
//     { id: 'C3', isBooked: false },
//     { id: 'C4', isBooked: false },
//     { id: 'C5', isBooked: false },
//     { id: 'C6', isBooked: true },
//     { id: 'C7', isBooked: false },
//     { id: 'C8', isBooked: false },
//     { id: 'C9', isBooked: false },
//     { id: 'C10', isBooked: true },
//     { id: 'C11', isBooked: false },
//     { id: 'C12', isBooked: false },
//     { id: 'C13', isBooked: false },
//     { id: 'C14', isBooked: false },
//     { id: 'C15', isBooked: true }
    
//   ]);