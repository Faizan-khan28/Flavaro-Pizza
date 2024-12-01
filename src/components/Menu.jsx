import { useEffect, useState } from "react";
import FoodData from "../Data/Data/FoodData";
import {useDispatch , useSelector} from "react-redux";
import { setCategory } from "../Redux/slices/CatogarySlice";

export default function Menu() {
  const [categories, setCategories] = useState([]);

  const listUniqueCategory = () => {
    const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategory);
    console.log(uniqueCategory);
  };

  useEffect(() => {
    listUniqueCategory();
  }, []);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find The Best Pizza's</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll overflow-smooth sm:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("ALL"))}
          className={`px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg ${
            selectedCategory === "ALL" && "bg-green-500 text-white"
          }`}
        >
          ALL
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg ${
              selectedCategory === category && "bg-green-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
