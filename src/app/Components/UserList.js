import React from 'react'


const userlist = [
    {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
    {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
    {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
    {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
      ];

const row = {background : 'red',height : 50 }


class Child extends React.Component {
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

class UserList extends React.Component {
    
   
    
    render() {

         userlist.forEach(element => {
            console.log(element.name);
            
        })

         displayName = ({name}) => (
            <div>{name}</div>
        )

    
        return (
            <div></div>
        )
    

    
    }

    
}

export default UserList;