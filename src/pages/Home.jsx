import FoodItems from "../components/FoodItems";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import toast, { Toaster } from 'react-hot-toast';

export default function Home () {

    const handleDelete = (name) => {
        toast.error(`Removed ${name}`);
      }

    return (
        <>
        <Toaster position="top-center" reverseOrder={false}/>
        <NavBar/>
        <Menu/>
        <FoodItems/>
        <Slider handleDelete={handleDelete}/>
        </>
    )
}