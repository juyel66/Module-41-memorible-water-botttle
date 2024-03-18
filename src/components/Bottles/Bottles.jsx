import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css"


const Bottles = () => {

    const [bottles, setBottles]=useState([])
    useEffect(()=>{
        fetch("bottle.json")
        .then(res=>res.json())
        .then(data=> setBottles(data))
    },[])
    return (
        <div>
            <h2>Bottles Here:{bottles.length} </h2>

            <div className="bottle-container">
            {
                bottles.map(bottleVariable => <Bottle key={bottleVariable.id}  bottle={bottleVariable}></Bottle>)
            }
            </div>
           

            
        </div>


    );
};

export default Bottles;