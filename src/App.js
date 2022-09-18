import React, {Component} from "react";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      nome: "João Pedro"
    }

  }
  render(){
    const {nome} = this.state
    return(
      <div>
        <h1>Olá, meu nome é {nome}</h1>
      </div>
      
    )
  }
}


export default App;
