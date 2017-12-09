import React from 'react'
import App from './Components/App'
import Header from './Components/Header'
import {render} from 'react-dom'


console.log('this is ankit nigam git test1')

let app = document.getElementById("app")
render(<App/>, app);

let header = document.getElementById("header")
render(<Header/>,header)