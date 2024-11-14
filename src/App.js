import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component{
  state = { lesson: ''};
  componentDidMount(){
    
  }
  
 fetchLesson = () => {
  axios.get('https://api.adviceslip.com/advice');
 }

  render(){
    return(
    <h1>APP</h1>
    );
  }
}

export default App;