import React from "react";
import axios from 'axios'

import User from "./components/User";

import './stylings.css';

class App extends React.Component {
  constructor() {
    super();
   
    this.state = {
      
      cards:[]
      
    }
  }
  componentDidMount() {
    
    axios.get("https://api.github.com/users/OniWarrior")
      .then(res => {
        
        this.setState({...this.state, cards: res.data})         
       
      })
      .catch(err => console.log(err)); 
  }

  componentDidUpdate() {
    console.log("component did update running");    
    

  }  


  render() {
    
    return (
      <div className="App">
       <User User={this.state.cards}/>        
      </div>
    );
  }
}
export default App;
