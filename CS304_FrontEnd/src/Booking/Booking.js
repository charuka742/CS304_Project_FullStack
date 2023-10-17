import { useState } from "react";

function Booking() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatClick = (event) => {
    const seat = event.target;
    if (seat.classList.contains("sold")) {
      alert("This seat is already sold.");
    } else if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setTotalPrice(totalPrice - parseInt(seat.getAttribute("data-price")));
    } else {
      seat.classList.add("selected");
      setSelectedSeats([...selectedSeats, seat]);
      setTotalPrice(totalPrice + parseInt(seat.getAttribute("data-price")));
    }
  };

  return (
    <section className="bg-gray-200 h-screen">
      <div className="flex justify-center">
        <div className="m-8 p-4 bg-white rounded shadow-md w-2/3">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="movie" className="font-bold">
                Select a movie:
              </label>
              <select id="movie" className="mt-2 px-4 py-2 border rounded-md">
                <option value="220">Godzilla vs Kong</option>
                <option value="320">Radhe</option>
                <option value="250">Chennai Express</option>
                <option value="260">RRR</option>
                <option value="245">Kick</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="theatre" className="font-bold">
                Select a Theatre:
              </label>
              <select id="theatre" className="mt-2 px-4 py-2 border rounded-md">
                <option value="220">Milano</option>
                <option value="320">Cinemax</option>
                <option value="250">Tarsan</option>
                <option value="260">Chaya</option>
                <option value="245">KCC</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="w-6 h-6 bg-yellow-400 rounded mr-2"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="w-6 h-6 bg-gray-700 rounded mr-2"></div>
                <span>Sold</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
                <div className="seat sold" data-price="100" onClick={handleSeatClick}></div>
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="100" onClick={handleSeatClick}> </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <div className="seat" data-price="120" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="120" onClick={handleSeatClick}> </div>
                <div className="seat sold" data-price="120" onClick={handleSeatClick} ></div>
                <div className="seat" data-price="120" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="120" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="120" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="120" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="120" onClick={handleSeatClick}> </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <div className="seat" data-price="150" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="150" onClick={handleSeatClick}> </div>
                <div className="seat sold" data-price="150" onClick={handleSeatClick}></div>
                <div className="seat" data-price="150" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="150" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="150" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="150" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="150" onClick={handleSeatClick}> </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <div className="seat" data-price="200" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="200" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="200" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="200" onClick={handleSeatClick}> </div>
                <div className="seat" data-price="200" onClick={handleSeatClick}> </div>
                <div className="seat sold" data-price="200" onClick={handleSeatClick}></div>
                <div className="seat sold" data-price="200" onClick={handleSeatClick}></div>
                <div className="seat sold" data-price="200" onClick={handleSeatClick} ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <div>
              <div className="flex justify-between">
                <span>Selected Seats:</span>
                <span>{selectedSeats.length}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Total Price:</span>
                <span>{totalPrice} Rs</span>
              </div>
              <button className="bg-yellow-400 px-4 py-2 rounded-md mt-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
