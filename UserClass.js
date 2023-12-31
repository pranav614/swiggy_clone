import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userData:{
              
            },
            
        }
 
    }
   async componentDidMount(){
            const data=await fetch("https://api.github.com/users/pranav614");
            const response=await data.json();
            this.setState({
                userData:response,
            })

           
           
    }
    
    render(){
        const {name,id,location}=this.state.userData;
     
       
        return (
            <>
            <h1>{name}</h1>
            <h3>{id}</h3>
            <h2>{location}</h2>
            </>
        )
    }
}
export default UserClass;
