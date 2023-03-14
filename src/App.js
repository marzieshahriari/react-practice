import React from "react";
import "./style.css";
import {data} from './data'
import Car from './Car'


export default function App() {
  return (
    <section className="car">
         {data.map((car)=>{
            return(
                <Car key={car.id} {...car}/>
                  )
         })
         }
     </section>
  )
}



