import React, {useEffect, useState} from "react"
import {useParams} from "react-router"
import {Button} from "@material-ui/core"

function SingleItem(){

    const params = useParams()
    console.log(params)
    // Didn't need to make a custom route on the back end. Could of continued to fetch with regular URL. Need to make sure to use consistent naming in routes and params.
    // Necessary to do this fetch as a post to get data to this show page.
    const [oneItem, setItem] = useState([])
    useEffect(() => {
        let isMounted = true 
        fetch(`http://localhost:3000/singleItem/`, {
            method: "POST", 
            headers:{
                "Content-type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({id: params.id})
        })
        .then(response => response.json())
        .then(oneItem =>  {
            if(isMounted){
                setItem(oneItem)
                // console.log(itemData)
                console.log(oneItem)
            }
        })            
        return ()=> {isMounted = false}
    }, [])

   

    return(
        <div className="SingleItem">
            <h2>Single Item</h2>
            
            <p></p> 
            <img src={oneItem.image} alt="product image"/>
            <h3>
                {oneItem.companyname} <br></br>
                {oneItem.name}
            </h3>
            <p>{oneItem.price}</p>
            <p>Product Information {oneItem.descripton}</p>
            <p>How To Use: <br></br>
                 {oneItem.directions}</p> 
            <Button
                variant="contained"
                color="primary"
                type="register"
                className="button-block"
                
            >
                Add To Cart
            </Button>

     </div>
    )
}
export default SingleItem