
import React from 'react'
import ReactDOM from "react-dom";
import { render } from 'react-dom'
import { createStore } from 'redux'
import MainReducer from './reducer/MainReducer'
import Root from './Root'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const store = createStore(MainReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Root/>
    </Router>
  </Provider>, 
  document.getElementById('root'))



