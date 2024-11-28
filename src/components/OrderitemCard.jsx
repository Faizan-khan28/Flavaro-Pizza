import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch} from "react-redux";
import { removetoCard, incrementQty, decrementQty } from "../Redux/slices/CartSlice";

export default function OrderitemCard({id ,img , name, price, qty , handleDelete}) {

  const dispatch = useDispatch()
   
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4">
      <MdDelete onClick={()=> {dispatch(removetoCard({id ,img , name, price, qty})),handleDelete(name)} } className=" absolute right-7 text-gray-700 cursor-pointer" />
      <img
        src={img}
        alt="onion pizza"
        className="w-[50px] h-[50px]"
      />

      <div className=" leading-6">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="font-bold text-green-500">₹{price}</span>
          <div className="flex gap-2 absolute right-7 items-center">
            <FiPlus onClick={()=>  dispatch(incrementQty({id}))} className="border-gray-600 border p-1 text-xl text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-lg transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <FiMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})) : (qty = 0)} className="border-gray-600 border p-1 text-xl text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-lg transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
