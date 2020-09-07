import React from "react"
import SingleItem from "./SingleItem"
import { Link } from 'react-router-dom'

function ItemCard(props){
    const item = props.item

    // function handleClick() {
    //     console.log("click click")
    //     <Link to={`/items/${item.id}`}></Link>
    //   }
    // onClick={handleClick()}
    return(
        <div >
            <ul className="products">
                <li key={item.id}>
                    <div className="product" >
                    <img src={item.image} alt={item.name} />
                    <p>{item.companyname}</p>
                    <p><Link to={`/items/${item.id}`} >{item.name}</Link></p>
                    </div>
                </li>
            </ul>
               
        </div>
   
    )
}
export default ItemCard