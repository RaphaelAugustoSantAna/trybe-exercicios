import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    }

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  };

  handleClickOne() {
    this.setState(({ clickBtn1 }) => ({
      clickBtn1: clickBtn1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.changeColorButton(this.state.clickBtn1)}`);
    });
  }

   handleClickTwo() {
    this.setState(({ clickBtn2 }) => ({
      clickBtn2: clickBtn2 + 1,
    }), () => {
      console.log(`Botão 2 ${this.changeColorButton(this.state.clickBtn2)}`);
    });
  }

   handleClickThree() {
    this.setState(({ clickBtn3 }) => ({
      clickBtn3: clickBtn3 + 1
    }), () => {
      console.log(`Botão 3 ${this.changeColorButton(this.state.clickBtn3)}`);
    });
  };
  
  changeColorButton(num){
      
    return num % 2 === 0 ?'green' : 'yellow';
  };

  render(){
    const { clickBtn1, clickBtn2, clickBtn3 } = this.state;
    return(
    <> 
    <button onClick={this.handleClickOne} 
    style = {{ backgroundColor: this.changeColorButton(clickBtn1) }}
    >Botão 1| Count = { clickBtn1 }
    </button>

    <button onClick={this.handleClickTwo} 
    style = {{ backgroundColor: this.changeColorButton(clickBtn2) }}
    >Botão 2 | Count = { clickBtn2 }
    </button>

    <button onClick={this.handleClickThree}
    style = {{ backgroundColor: this.changeColorButton(clickBtn3) }}
    >Botão 3 | Count = { clickBtn3 }
    </button>
    </>
    );
  }
}

export default App;
