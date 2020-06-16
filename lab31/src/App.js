import React from 'react';
import Header from './Componant/Header';
import Counter from './Componant/Counter';
import Footer from './Componant/Footer';


class App extends React.Component{
  
  render(){
    return(
      <div className="wrapper">
        <Header/>
        <Counter/> 
        <Footer/>
      </div>
    )
  }

}

export default App;
