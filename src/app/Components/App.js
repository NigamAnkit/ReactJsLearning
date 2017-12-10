import React from 'react'
import {render} from 'react-dom'
import  Header from './Header'
import StatelessComponent from './StatelessComponent'

class App extends React.Component{

    

    render(){
        let user = {
            name : 'Ankit',
            age : 30,
        }
        return(
            <div>
                <h1>This is my first react compoment sda</h1>
                <Header name = {user.name} age = {user.age} />
                <StatelessComponent/>
            </div>
        )
    }
}

export default App;