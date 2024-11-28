import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtoCard } from "../Redux/slices/CartSlice";

export default function FoodCards({ desc, name, rating, img, price, id, handleToast }) {

  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2" >
      <img
        src={img}
        alt="Onion Pizza"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}........</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center justify-center">
          <FaStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={()=> {
            dispatch(addtoCard({id , price, rating, img, name, qty: 1}))
            handleToast(name);
          }}
          className="p-1 bg-green-500 rounded-md hover:bg-green-600 text-white text-sm"
        >
          Add to Card
        </button>
      </div>
    </div>
  );
}
