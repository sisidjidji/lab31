import React from 'react';


function Header() {
  return (
    <header>
  <h1> Welcome To My First React App </h1>
  </header>
  );
}


class Main extends React.Component{
  render(){
    return(
      <div class="wrapper">
        <Header/>
      </div>
    )
  }

}

export default Main;
