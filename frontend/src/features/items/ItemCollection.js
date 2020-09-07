import React, {useEffect} from 'react';
import ItemCard from "./ItemCard"
import {useDispatch, useSelector} from 'react-redux'



const itemLink = "http://localhost:3000/items"

function ItemCollection(){
    let dispatch = useDispatch()
    let allItems = useSelector(state => state.itemsState.items)
  console.log(allItems)
    useEffect(()=>{
      fetch(itemLink,{
        credentials:"include"
      })
      .then(response => response.json())
      .then(fetchItems => {
        console.log(fetchItems)
        dispatch({type:"GET_ITEMS", items:fetchItems})
      })
    },[])

 

    // const renderedItems = allItems.map(item => (
    //   <div className="ItemList" key={item.id} item={item}>
    //     <img src={item.image}  />
    //     <p>{item.companyname}</p>
    //    <p> {item.name} </p>
    //   </div>
    // ))

    const renderedItems = allItems.map(item => (
      <ItemCard key={item.id} item={item}/>
    ))

    

    return(
        <div className="grid-container" >
          <div className="content">
           <header>
            {/* <NavBar/>  */}
           </header>
          
            <div className="main">
            <h2> All Products</h2>
            {renderedItems}

            </div>

          </div>
        
        </div>
        
    )

}
export default ItemCollection;

