import React from 'react';
import './Counter.scss';

class Counter extends React.Component{
    constructor(prop){
      super(prop);
      this.state={
      count:0
      };
    }
  
    HandlerCountUp= e=>{
      e.preventDefault();
      let count = this.state.count+1;
      this.setState({count})  ;
  }
  HandlerCountDown= e=>{
    e.preventDefault();
    let count=this.state.count -1 
        
    this.setState({count})  
  }
  render(){
  return (
    <div className="event">
      <h2>count : {this.state.count}</h2>
      <button onClick={this.HandlerCountUp} > + </button>
      <button onClick={this.HandlerCountDown}> - </button>
    </div>
      )
  }
  }

  export default Counter ;