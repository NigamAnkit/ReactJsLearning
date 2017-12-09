import React from 'react'
import {render} from 'react-dom'
import UserList from './UserList'
import Calculator from './Calculator'
const a = Date()
class App extends React.Component{
    render(){
        return(
            <div><h1>This is my first react compoment {a}</h1>
            {/* <UserList/> */}
            {/* <Calculator/> */}
            </div>
            
        )
    }
}

export default App;