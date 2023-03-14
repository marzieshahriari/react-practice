import React from "react";

const Car = (props) => {
  const {img,title,price,des} = props;
  const clickHandle =() =>{
    alert('hello world')
  }
  const consoleExample = (title)=>{
    console.log(title)
  }
    return(
          <>
            <div className="car-item" onMouseMove={()=>{
            console.log(title)
            }}>
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <p>{price}</p>
                <p>{des}</p>
                <button type='button' onClick={clickHandle}>click me</button>
                <button type='button' onClick={()=>consoleExample(title)}>cosole title</button>
            </div>
          </>
    )
  }
export default Car;