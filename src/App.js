import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super(); // this is needed to call the constructor of the parent class

    this.state = {
      name:
      {
        firstName: 'TEODOR',
        lastName: 'AXINTE'
      },
      company: 'UNI'
    }

  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HI {this.state.name.firstName}, {this.state.name.lastName}! You are working at {this.state.company}
          </p>

          <button
           
            onClick={() => {
              this.setState(() => {

                return {
                  name:
                  {
                    firstName: "IONUT",
                    lastName: "TEODOR"
                  },
                  company: "MAI"
                }
              }, () => {console.log("CURRENT STATE IS: ", this.state)})
            }}



          >Change Name</button>
        </header>
      </div>
    );
  }


}

export default App;
