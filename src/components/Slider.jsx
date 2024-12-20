import { IoCloseSharp } from "react-icons/io5";
import OrderitemCard from "./OrderitemCard";
import { FaShoppingCart  } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Slider({handleDelete}) {
  const [slider, setSlider] = useState(false);

  let toggleSlider = () => {
    setSlider(!slider);
  };

  const OrderitemCards = useSelector(state => state.Cart.Cart);

  const totalQty = OrderitemCards.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const totalPrice = OrderitemCards.reduce((totalPrice , item) => totalPrice + item.qty * item.price, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed top-0 right-0 bg-white w-full h-full p-5 sm:w-[25vw] ${
          slider ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold">My Orders</span>
          <IoCloseSharp
            onClick={toggleSlider}
            className="border-gray-600 border-2 text-gray-600 p-1 text-xl font-bold rounded-md cursor-pointer hover:text-red-300 hover:border-red-300"
          />
        </div>

        {OrderitemCards.length > 0 ? OrderitemCards.map((food) => {
          return (
            <OrderitemCard
              key={food.id}
              id={food.id}
              img={food.img}
              price={food.price}
              name={food.name}
              qty={food.qty}
              handleDelete={handleDelete}
            />
          ); 
        }) : <h2 className="text-xl text-gray-800 font-bold flex justify-center mt-14">Your Cart is Empty</h2>}

        <div className=" absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items :{totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount : ₹{totalPrice}</h3>
          <hr className="w-[90vw] sm:w-[18wv] my-2" />
          <button onClick={()=> navigate("/Success")} className="bg-green-500 text-white hover:bg-green-600 rounded-md px-3 py-2 w-[90vw] sm:w-[23vw] mb-5">
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart 
        onClick={toggleSlider}
        className={`${totalQty > 0 && "animate-bounce delay-500 transition-all"} rounded-2xl bg-white text-4xl shadow-md p-3 h-[45px] w-[45px] fixed bottom-4 cursor-pointer right-4`}
      />
    </>
  );
}
