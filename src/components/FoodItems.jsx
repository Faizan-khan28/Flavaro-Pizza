import FoodCards from "./FoodCards";
import FoodData from "../Data/Data/FoodData.js";
import toast, { Toaster } from 'react-hot-toast';

export default function FoodItems() {

 const handleToast = (name) => {
   toast.success(`Added ${name}`);
  }
  
  return (
   <>
    <Toaster position="top-center" reverseOrder={false}/>

    <div className="flex flex-wrap gap-10 justify-center sm:justify-start mx-6 my-10">
      
      {FoodData.map(food => {
        return (
          <FoodCards
            key={food.id}
            id={food.id}
            img={food.img}
            name={food.name}
            desc={food.desc}
            rating={food.rating}
            price={food.price}
            handleToast={handleToast}
          />
        );
      })}
    </div>

   </>
  );
}
