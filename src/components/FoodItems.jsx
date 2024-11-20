import FoodCards from "./FoodCards";
import FoodData from "../Data/Data/FoodData.js";

export default function FoodItems({cart}) {
  return (
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
          />
        );
      })}
    </div>
  );
}
