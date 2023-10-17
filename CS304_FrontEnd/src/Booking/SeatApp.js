import React, { useState } from "react";
import Seat from "./Seat";
import img from "../Assets/img01 (20).jpg";
import { Link } from "react-router-dom";

const SeatBooking = () => {
  const [seats, setSeats] = useState([
    { id: "A1", isBooked: false, price: 200 },
    { id: "A2", isBooked: false, price: 200 },
    { id: "A3", isBooked: false, price: 200 },
    { id: "A4", isBooked: false, price: 200 },
    { id: "A5", isBooked: false, price: 200 },
    { id: "A6", isBooked: true, price: 200 },
    { id: "A7", isBooked: false, price: 200 },
    { id: "A8", isBooked: true, price: 200 },
    { id: "A9", isBooked: false, price: 200 },
    { id: "A10", isBooked: false, price: 200 },
    { id: "A11", isBooked: true, price: 200 },
    { id: "A12", isBooked: false, price: 200 },
    // { id: 'A13', isBooked: true , price:200},
    // { id: 'A14', isBooked: false, price:200},
    // { id: 'A15', isBooked: false, price:200},

    { id: "B1", isBooked: false, price: 275 },
    { id: "B2", isBooked: false, price: 275 },
    { id: "B3", isBooked: false, price: 275 },
    { id: "B4", isBooked: false, price: 275 },
    { id: "B5", isBooked: true, price: 275 },
    { id: "B6", isBooked: false, price: 275 },
    { id: "B7", isBooked: false, price: 275 },
    { id: "B8", isBooked: true, price: 275 },
    { id: "B9", isBooked: false, price: 275 },
    { id: "B10", isBooked: true, price: 275 },
    { id: "B11", isBooked: false, price: 275 },
    { id: "B12", isBooked: false, price: 275 },
    // { id: 'B13', isBooked: false, price: 275 },
    // { id: 'B14', isBooked: false, price: 275 },
    // { id: 'B15', isBooked: true , price:275 },

    { id: "C1", isBooked: false, price: 350 },
    { id: "C2", isBooked: true, price: 350 },
    { id: "C3", isBooked: false, price: 350 },
    { id: "C4", isBooked: false, price: 350 },
    { id: "C5", isBooked: false, price: 350 },
    { id: "C6", isBooked: false, price: 350 },
    { id: "C7", isBooked: false, price: 350 },
    { id: "C8", isBooked: false, price: 350 },
    { id: "C9", isBooked: false, price: 350 },
    { id: "C10", isBooked: false, price: 350 },
    { id: "C11", isBooked: false, price: 350 },
    { id: "C12", isBooked: false, price: 350 },
    // { id: 'C13', isBooked: false, price:350},
    // { id: 'C14', isBooked: false, price:350},
    // { id: 'C15', isBooked: true , price:350 },

    { id: "D1", isBooked: false, price: 350 },
    { id: "D2", isBooked: false, price: 350 },
    { id: "D3", isBooked: false, price: 350 },
    { id: "D4", isBooked: true, price: 350 },
    { id: "D5", isBooked: false, price: 350 },
    { id: "D6", isBooked: false, price: 350 },
    { id: "D7", isBooked: false, price: 350 },
    { id: "D8", isBooked: false, price: 350 },
    { id: "D9", isBooked: false, price: 350 },
    { id: "D10", isBooked: false, price: 350 },
    { id: "D11", isBooked: false, price: 350 },
    { id: "D12", isBooked: false, price: 350 },
    // { id: 'D13', isBooked: false, price:350},
    // { id: 'D14', isBooked: false, price:350},
    // { id: 'D15', isBooked: true , price:350 }
  ]);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtime, setShowtime] = useState("");
  const [date, setDate] = useState("");

  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + seat.price,
    0
  );
  const handleShowtimeSelect = (event) => {
    setShowtime(event.target.value);
  };

  const handleSeatClick = (seat) => {
    if (!seat.isBooked) {
      if (selectedSeats.some((selectedSeat) => selectedSeat.id === seat.id)) {
        setSelectedSeats(
          selectedSeats.filter((selectedSeat) => selectedSeat.id !== seat.id)
        );
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
      setSeats(
        seats.map((s) => {
          if (s.id === seat.id) {
            return {
              ...s,
              isBooked: !s.isBooked,
            };
          }
          return s;
        })
      );
    } else {
      alert("This seat is already selected. Please Select another Seat.!");
    }
  };

  const handleCheckout = () => {
    alert(`Total cost: $${totalPrice}`);
    if (showtime === "") {
      alert("Please select a showtime.");
    } else {
      alert(
        `Total cost for the bookings: Rs.${totalPrice}.00\nShowtime: ${showtime}`
      );
    }
  };

  const handleDateSelect = (event) => {
    setDate(event.target.value);
  };

  return (
    <div
      className="flex flex-col items-center p-8"
      style={{
        backgroundImage: `url('${img}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}
    >
      <h1 className="uppercase text-2xl  text-white font-bold mb-4">
        Gajaman 3D - Sinhala
      </h1>
      <div className="flex mx-5  text-white px-4 py-2 my-2">
        <div className="mb-4 uppercase mx-6 ">
          <label htmlFor="date" className="mx-5">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            placeholder="Choose the Date:"
            onChange={handleDateSelect}
            className="rounded-md items-end w-full border-2  text-black border-gray-400"
          />
        </div>
        <div className="mb-4 mx-6 uppercase">
          <label htmlFor="showtime" className="mx-5">
            Showtime:
          </label>
          <select
            value={showtime}
            onChange={handleShowtimeSelect}
            className="items-center h-7 rounded-md text-black w-full border-2 border-gray-400"
          >
            <option value=""> Select Showtime: </option>
            <option value="10AM" className="lowercase">
              10AM
            </option>
            <option value="2PM" className="lowercase">
              2PM
            </option>
            <option value="6PM" className="lowercase">
              6PM
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            seat={seat}
            onClick={() => handleSeatClick(seat)}
          />
        ))}
      </div>
      <div className="mt-8">
        <p className="text-lg font-bold  mb-4">Selected Seats:</p>
        {selectedSeats.length > 0 ? (
          (
            <ul>
              {selectedSeats.map((selectedSeat) => (
                <li key={selectedSeat.id}>{selectedSeat.id}</li>
              ))}
            </ul>
          ) && (
            <p className="font-bold text-black">
              Total cost for the Bookings: Rs.{totalPrice}.00{" "}
            </p>
          )
        ) : (
          <p className="uppercase font-bold">
            Please Select the seats before you Checkout!{" "}
          </p>
        )}
        <div>
          <button
            onClick={handleCheckout}
            className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Checkout
          </button>
          <button
            className="mx-10  justify-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            <Link to={`/promotions`}>Check Promotions</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
