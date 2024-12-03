import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function ProtectedRoute ({element}) {

    const cartitems = useSelector((state)=> state.Cart.Cart);
    return cartitems.length > 0 ? element : <Navigate to="/" />
}