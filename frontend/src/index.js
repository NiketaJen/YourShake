
import React from 'react'
import ReactDOM from "react-dom";
import { render } from 'react-dom'
import { createStore } from 'redux'
import MainReducer from './reducer/MainReducer'
import Root from './Root'
import { Provider } from 'react-redux'




const store = createStore(MainReducer)

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>, 
  document.getElementById('root'))



