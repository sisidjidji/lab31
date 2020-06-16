import React from 'react';


function Header() {
  return (
    <header>
  <h1> Welcome To My First React App </h1>
  </header>
  );
}

function Footer(){
 return(<div>
    &copy; DeltaV 2020 
  </div>)
}
class App extends React.Component{
  render(){
    return(
      <div class="wrapper">
        <Header/>
        <Footer/>
      </div>
    )
  }

}

export default App;
