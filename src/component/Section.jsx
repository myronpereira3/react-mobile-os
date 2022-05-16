import React from "react"

let Section=({name,mobiles1,mobile2,mobile3,mobile4})=>{
   return <>
    <h1>{name}</h1>
    <ul>
        <li>{mobiles1}</li>
        <li>{mobile2}</li>
        <li>{mobile3}</li>
        <li>{mobile4}</li>
    </ul>
    </>
}

export default Section