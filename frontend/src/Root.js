import React,{useState, useEffect} from "react"
import {useHistory} from "react-router"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import ItemCollection from "./features/items/ItemCollection"
import SingleItem from "./features/items/SingleItem"
import Login from "./features/accounts/Login"
// import Register from "./features/accounts/Register"
import Signup from "./features/accounts/Signup"
import UserAccount from "./features/accounts/UserAccount"
import EditAccount from "./features/accounts/EditAccount"
import CartCollection from "./features/carts/CartCollection"

const Root = () => {
  let [currentUser, setUser] = useState({})
  let history = useHistory()

  let logout = () => {
    fetch('http://localhost:3000/logout',{
      credentials: 'include',
    })
    .then(resp => resp.json())
    .then(data => {
      setUser({})
      history.push('/')
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/check-loggin', {
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(user => {
      if(user.username){
        setUser(user)
      } 
      else{
        history.push('/')
      }
    })
  }, [history])

    return(
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cart" component={CartCollection} />
      <Route exact path="/Products" component={ItemCollection} />
      <Route exact path="/items/:id" component={SingleItem} />
      <Route exact path="/account/signup" component={Signup} />
      <Route exact path="/account/login" component={()=> <Login setUser={setUser} currentUser = {currentUser}/>} />
      <Route exact path="/account/editaccount/:id" component={()=> <EditAccount currentUser ={currentUser}/>} />
      <Route exact path="/account/useraccount" component={()=> <UserAccount currentUser ={currentUser} logout ={logout}/>} />
      {/* <Route path="/account/register" component={Register} /> */}
      
    </Switch>
    )
   
    
}

  
  export default Root