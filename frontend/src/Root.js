import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import ItemCollection from "./features/items/ItemCollection"
import SingleItem from "./features/items/SingleItem"

const Root = () => (
    
      <Router>
        <Route exact path="/items/:itemId" component={SingleItem} />
        <Route path="/Products" component={ItemCollection} />
        <Route path="/" exact component={App} />
      </Router>
    
  )

  
  export default Root