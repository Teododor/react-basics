import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super(); // this is needed to call the constructor of the parent class
    this.state = {
      monsters: [
        {
          name: 'Linda'
        },

        {
          name: 'Frank'
        },

        {
          name: 'Jacky'
        }
      ]
    }
  }

  render() {
    const monsterElements = [];
    this.state.monsters.forEach(monster => {
      monsterElements.push(<h1 /*key={monster.name}*/> {monster.name}</h1>)
    })
    return (
      <div className="App">
        {

          /*
          this.state.monsters.forEach(element => {
            <h1>{element.name}</h1>
          }, () => {})

         

          // the issue is with the usage of 'forEach' method in the 'render' function.
          // the 'forEach' method doesn't return a new array or JSX elements, it simply itterates over the array.
          // Therefore, the JSX elements inside the 'forEach' callback are not being rendered 
          // MAP RETURNS AN ARRAY BACK, WHILE FOREACH SIMPLY ITTERATES OVER THE ARRAY

           */



          //USING FOREACH SEPARATELY AND CREATING AFTER THAT THE JSX 
          monsterElements
       







          //this.state.monsters.map(monster => <h1>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
