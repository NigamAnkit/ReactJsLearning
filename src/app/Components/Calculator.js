
import React from 'react'

class Calculator extends React.Component{

    constructor(props) {
		super(props);
		this.state= {
            firstValue: 0,
            captured:0,

		}
    }
    // onInputChanged = (e) => {
	// 	this.setState({ 
	// 		firstValue: e.target.value,
	// 		captured: firstValue
	// 	})
    // }
    
    render(){
        return(
            <div> 
                <h1>Calculator</h1>

                <div>
                    {/* Input: <input type ={ this.state.firstValue} 
							onChange ={(e) => { this.onInputChanged(e)}}/>
					{
						console.log('Your value is ' + this.state.firstValue)
					} */}
                </div>
            </div>
        )
    }
}