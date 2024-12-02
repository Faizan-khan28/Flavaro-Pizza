import FoodCards from "./FoodCards";
import FoodData from "../Data/Data/FoodData.js";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

export default function FoodItems() {

 const handleToast = (name) => {
   toast.success(`Added ${name}`);
  }

 const category = useSelector((state)=> state.category.category);
 const search = useSelector((state)=> state.search.search);
  
  return (
   <>
    <Toaster position="top-center" reverseOrder={false}/>

    <div className="flex flex-wrap gap-10 justify-center sm:justify-start mx-6 my-10">

      {
        FoodData.filter((food)=> {
          if(category === "ALL") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food)=> (
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
        ))
      }
      
      {/* {FoodData.map(food => {
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
      })} */}
    </div>

   </>
  );
}
