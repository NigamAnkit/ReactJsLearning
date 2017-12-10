import React from 'react'
import {render} from 'react-dom'

class Header extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            localAge : props.age,
            status : 0
        }
    }

    addition(){
        this.setState({
            localAge : this.state.localAge + 3
        })
        console.log(this.state.localAge)
    }

    render(){
        return (
            <div>
                <nav><h1>This is a navigation bar</h1></nav>
                <h1>My name is {this.props.name} </h1>
                <div>my age is {this.state.localAge}</div>
                <button onClick = {() => this.addition() }>Press This</button>
            </div>
        )

    
    }
}

export default Header;