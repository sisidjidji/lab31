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



class Main extends React.Component{
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
  let count=this.state.count -1 
      
  this.setState({count})  
}
render(){
return (
  <div>
    <h2>count : {this.state.count}</h2>
    <button onClick={this.HandlerCountUp} > + </button>
    <button onClick={this.HandlerCountDown}> - </button>
  </div>
    )
}
}
class App extends React.Component{
  
  render(){
    return(
      <div className="wrapper">
        <Header/>
        <Main/>
       
        <Footer/>
      </div>
    )
  }

}

export default App;
