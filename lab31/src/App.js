import React from 'react';


function Header() {
  return (
    <header>
  <h1> Welcome To My First React App </h1>
  </header>
  );
}

function Footer(){
 return(
  <div>
    &copy; DeltaV 2020 
  </div>)
}

function Counter(){
  return (
<div>
  
  <button onClick={this.HandlerCountUp} >+</button>
  <button onClick={this.HandlerCountDown}>-</button>
</div>
  )
}

class Main extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
 count:""
    };
  }

  HandlerCountUp= e=>{
    e.preventDefault();
    let count= e.target.onClick
    count= count+1;
    this.setState({count})  
}
HandlerCountDown= e=>{
  e.preventDefault();
  let count= e.target.onClick
  count= count-1;
  this.setState({count})  
}

  render(
  
  )
}
class App extends React.Component{
  
  render(){
    return(
      <div className="wrapper">
        <Header/>
        <Main/>
        <Counter/>
        <Footer/>
      </div>
    )
  }

}

export default App;
