import React, { useState } from "react";

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [boxDivs, setBoxDivs] = useState([]);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const addBoxes = () => {
    const newBoxDivs = Array.from({ length: quantity }, (_, index) => {
      const number = index + 1;
      const isEven = number % 2 === 0;
      const isPrimeNumber = isPrime(number);

      let backgroundColor = "lightblue";

      if (isPrimeNumber) {
        backgroundColor = "lightgreen";
      } else if (isEven) {
        backgroundColor = "orange";
      } else {
        backgroundColor = "red";
      }

      return (
        <div
          key={index}
          className="border flex-wrap border-blue-800 rounded-lg w-44 h-28 flex items-center justify-center "
          style={{ backgroundColor }}
        >
          {number}
        </div>
      );
    });

    setBoxDivs(newBoxDivs);
  };

  return (
    <>
      <div className="px-20 py-20">
        <div>
          <p className="pb-3">Enter Number</p>
          <div className="flex gap-5">
            <input
              className="border px-2 rounded-lg"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="bg-indigo-600 px-5 py-2 rounded-lg text-white border border-blue-600"
              onClick={addBoxes}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
        <div className="flex gap-3 items-center">
            <p>Even Numbers</p>{" "}
            <p className="h-[10px] w-[10px] rounded-lg bg-orange-500"></p>
          </div>  <div className="flex gap-3 items-center">
            <p>Odd Numbers </p>{" "}
            <p className="h-[10px] w-[10px] rounded-lg bg-red-700"></p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Prime Numbers </p>{" "}
            <p className="h-[10px] w-[10px] rounded-lg bg-green-300"></p>
          </div>
        </div>
        <div className="mt-10 border  px-10 py-10 border-blue-600 rounded-lg bg-blue-100">
          {/* Render the box divs */}
          <div className="flex flex-wrap gap-5">{boxDivs}</div>
        </div>
      </div>
    </>
  );
};

export default App;
