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
            <h2>Item Card</h2>
                 <div className="ItemList" >
                <img src={item.image} alt="product image" />
                <p>{item.companyname}</p>
                 <p><Link to={`/items/${item.id}`} >{item.name}</Link></p>
              </div>
        </div>
   
    )
}
export default ItemCard