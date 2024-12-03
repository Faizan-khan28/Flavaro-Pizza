import { useDispatch } from "react-redux";
import {setSearch} from "../Redux/slices/searchSlice";

export default function NavBar () {

    const dispatch = useDispatch();
    return (
        <nav className="flex flex-col sm:flex-row justify-between py-3 mx-6 mb-10">
            <div>
                <h3 className=" text-xl font-bold text-gray-600 text-center">{new Date().toUTCString().slice(0 ,16)}</h3>
                <h1  className="text-2xl font-bold text-center mb-2 ml-6">Faizan Pizza's🍕</h1>
            </div>
            <div>
              <input onChange={(e)=>dispatch(setSearch(e.target.value))} className=" border p-3 outline-none text-sm rounded-lg w-full sm:w-[25vw] " type="search" name="search" id="" placeholder="Search here" autoComplete="off" />
            </div>
        </nav>
    )
}