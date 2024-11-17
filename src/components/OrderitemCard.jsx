import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function OrderitemCard() {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete className=" absolute right-7 text-gray-700 cursor-pointer" />
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="onion pizza"
        className="w-[50px] h-[50px]"
      />

      <div className=" leading-6">
        <h2 className="font-bold text-gray-800">Onion Pizza</h2>
        <div className="flex justify-between">
          <span className="font-bold text-green-500">120</span>
          <div className="flex gap-2 absolute right-7 items-center">
            <FiPlus className="border-gray-600 border p-1 text-xl text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-lg transition-all ease-linear cursor-pointer" />
            <span>1</span>
            <FiMinus className="border-gray-600 border p-1 text-xl text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-lg transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
