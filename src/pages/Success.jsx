import { useEffect, useState } from "react";
import {PropagateLoader} from "react-spinners";

export default function Success () {

    const [loading , setLoading] = useState(true);

    useEffect(()=> {
      setTimeout(()=> {
        setLoading(false)
      }, 3000)
    }, []);

    return (
        <div className=" flex flex-col items-center justify-center h-screen">
            <div>
              {
                loading ? <PropagateLoader color="#13ed54" /> : 
                <div> 
                    <h2 className=" text-3xl font-semibold mb-4 text-center">Order Successful!👍</h2>
                    <p>Your Order Has Been Succesfully Placed😊</p>
                </div> 
              }
            </div>
            
           
        </div>
    )
}