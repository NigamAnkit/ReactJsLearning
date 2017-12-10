import React from 'react'
import {render} from 'react-dom'
import  Header from './Header'

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>This is my first react compoment sda</h1>
                <Header name = 'Ankit'/>
            </div>
        )
    }
}

export default App;