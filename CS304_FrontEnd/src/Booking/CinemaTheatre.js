import React, { useState } from "react";
import Seat from "./Seat";

const CinemaTheatre = ({
  seats,
  film,
  date,
  standardPrice,
  premiumPrice,
  vipPrice,
}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (id, selected) => {
    if (selected) {
      setSelectedSeats([...selectedSeats, id]);
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== id));
    }
  };

  const getSeatCategory = (id) => {
    // implement your own logic to determine the category of the seat based on its id
    return "standard";
  };

  const getSeatPrice = (category) => {
    switch (category) {
      case "standard":
        return standardPrice;
      case "premium":
        return premiumPrice;
      case "vip":
        return vipPrice;
      default:
        return 0;
    }
  };

  const total = selectedSeats.reduce(
    (acc, seat) => acc + getSeatPrice(getSeatCategory(seat)),
    0
  );

  return (
    <div className="cinema-theatre">
      <h1 className="text-3xl font-bold mb-4">{film}</h1>
      <h2 className="text-xl font-medium mb-2">{date}</h2>
      <div className="grid grid-cols-10 gap-2">
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            id={seat.id}
            category={getSeatCategory(seat.id)}
            isBooked={seat.isBooked}
            onSelect={handleSeatSelect}
          />
        ))}
      </div>
      <div className="text-lg font-medium mt-4">{`Total: $${total}`}</div>
    </div>
  );
};

export default CinemaTheatre;
