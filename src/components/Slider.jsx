import { IoCloseSharp } from "react-icons/io5";
import OrderitemCard from "./OrderitemCard";

export default function Slider () {
    return (
        <>
        <div className="fixed top-0 right-0 bg-white w-full h-full p-5 sm:w-[25vw]">
            <div className="flex justify-between items-center my-3">
                <span className="text-xl font-bold">My Orders</span>
                <IoCloseSharp className="border-gray-600 border-2 text-gray-600 p-1 text-xl font-bold rounded-md cursor-pointer hover:text-red-300 hover:border-red-300" />
            </div>

            <OrderitemCard/>
            <OrderitemCard/>
            <OrderitemCard/>

            <div className=" absolute bottom-0 ">
                <h3 className="font-semibold text-gray-800">Total Amount :</h3>
                <h3 className="font-semibold text-gray-800">Items :</h3>
                <hr className="w-[90vw] sm:w-[18wv] my-2" />
                <button className="bg-green-500 text-white hover:bg-green-600 rounded-md px-3 py-2 w-[90vw] sm:w-[23vw] mb-5">Checkout</button>
            </div>
        </div>
        </>
    )
}