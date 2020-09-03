import React from "react"
import {Button} from "@material-ui/core"
import {useHistory} from "react-router"


function UserAccount(props) {
    let history = useHistory()

    let editAccount = () =>{
        history.push(`/account/editaccount/${props.currentUser.id}`)
    }

    let goHome = () =>{
        history.push('/')
    }

    return(
        <div>
            <h2>Hello, {props.currentUser.first_name}!</h2>
            <br>
            </br>
            <br>
            </br>
            <h4>ACCOUNT INFORMATION</h4>
            Contact Information 
            <br></br>
            Name: {props.currentUser.first_name}<></>{props.currentUser.last_name}
            <br></br>
            Email: {props.currentUser.email}
            <br></br>
            <Button
            variant="contained"
            color="primary"
            type="register"
            className="button-block"
             onClick={()=> editAccount()}>Edit Your Account</Button>
             <br></br>
              <Button
            variant="contained"
            color="primary"
            type="register"
            className="button-block"
             onClick={() => goHome()}>Home</Button>
        </div>
    )

};
export default UserAccount