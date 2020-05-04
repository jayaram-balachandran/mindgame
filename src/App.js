import React, { Component } from "react";
import "./App.css";

const li = [
  {
    name: "question",
    str: "Click on button to start the Game",
  },
  {
    name: "question",
    str: "Guess a number between 1 to 10",
  },
  {
    name: "question",
    str: "Multiply it by 9",
  },
  {
    name: "question",
    str: "Sum the digits, if it is a two digit number. (Example 1+2 = 3)",
  },
  {
    name: "question",
    str: "Subtract 5 from the number you got",
  },
  {
    name: "question",
    str:
      "Convert the number into alphabets. (Example, if number = 1 -> A, 2 -> B, 3 -> C, 4 -> D)",
  },
  {
    name: "question",
    str:
      "Guess a country name, starting with the alphabet you got. (Example A -> Algeria)",
  },
  {
    name: "question",
    str: "Guess a animal name starting with the last alphabet of the country ",
  },
  {
    name: "question",
    str: "Guess a fruit name starting with the last alphabet of the animal ",
  },
  {
    name: "answer",
    str: " Was it an Orange Kangarooo in Denmark?  ",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickFlag: false,
      clicks: 0,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
			{ this.state.clicks === 10 ? (
				<h1>Bye Buddy...!</h1>
			) : (
				<div>
				<h3>Mind Games</h3>
          		<h1>{li[this.state.clicks].str}</h1>
          		<button onClick={this.IncrementItem}>Next...!</button>
				</div>
			)}
        </header>
      </div>
    );
  }
}

export default App;
