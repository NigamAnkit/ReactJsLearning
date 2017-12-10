import React from 'react'
import {render} from 'react-dom'

class Header extends React.Component {

    constructor(props){
        super()


    }

    render(){
        return (
            <div>
                <nav><h1>This is a navigation bar</h1></nav>
                <h1>My name is {this.props.name} </h1>
                <button>Press This</button>
            </div>
        )

    
    }
}

export default Header;