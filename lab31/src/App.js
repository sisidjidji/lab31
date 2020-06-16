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
  
  <button onClick={this.HandlerCount} >+</button>
  <button>-</button>
</div>
  )
}

class Main extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
words: count
    };
  }

  HandlerCount= e=>{
    e.preventDefault();
    let count= e.target.value
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
