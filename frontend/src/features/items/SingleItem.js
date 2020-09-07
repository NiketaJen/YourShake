import React, { useEffect, useState} from "react"
import {useParams} from "react-router"
import {Button} from "@material-ui/core"
// import {connect} from "react-redux"
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from "react-router"

function SingleItem() {
    let dispatch = useDispatch()
    let history = useHistory()
    let item = useSelector(state => state.itemState.item)
    console.log(item)
    const params = useParams()
    console.log(params)
    // Didn't need to make a custom route on the back end. Could of continued to fetch with regular URL. Need to make sure to use consistent naming in routes and params.
    // Necessary to do this fetch as a post to get data to this show page.
    // const [oneItem, setItem] = useState([])
    useEffect(() => {
        // let isMounted = true 
        fetch(`http://localhost:3000/singleItem/`, {
            credentials:"include",
            method: "POST", 
            headers:{
                "Content-type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({id: params.id})
        })
        .then(response => response.json())
        .then(item =>  {
            console.log(item.name)
            // if(isMounted){
            //     setItem(oneItem)
            //     console.log(oneItem)
            // }
            dispatch({type:"GET_ITEM", item:item})
        })            
        // return ()=> {isMounted = false}
    }, []);


    let addToCart=(item_id)=>{  
        console.log(item_id) 
       
     dispatch({type:"ADD_TO_CART", cartItems: item_id })
     history.push('/cart')
    };

  
    return(
        <div className="SingleItem">
            <h2>Single Item</h2>
            
            <p></p> 
            <img src={item.image} alt="product image"/>
            <h3>
                {item.companyname} <br></br>
                {item.name}
            </h3>
            <p>{item.price}</p>
            <p>Product Information {item.descripton}</p>
            <p>How To Use: <br></br>
                 {item.directions}</p> 
            <Button
                variant="contained"
                color="primary"
                type="register"
                className="button-block"
                onClick={()=> addToCart(item.id)}
            >
                Add To Cart
            </Button>

        </div>
        )
   
};



export default SingleItem