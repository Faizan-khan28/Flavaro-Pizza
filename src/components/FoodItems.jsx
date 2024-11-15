import { FaStar } from "react-icons/fa";

export default function FoodItems() {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="Onion Pizza"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
         <h2>Onion Pizza</h2>
         <span className="text-green-500">140</span>
      </div>
      <p className="text-sm font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit nisi itaque,</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center justify-center">
          <FaStar className="mr-1 text-yellow-400"/> 4.5
        </span>
        <button className="p-1 bg-green-500 rounded-lg hover:bg-green-600 text-white text-sm">Add to Card</button>
      </div>
    </div>
  )
}