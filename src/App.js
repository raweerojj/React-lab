import React, { Component } from 'react';
import './App.css';
// import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

//const word = "Hello";
class App extends Component {
  render() {
    return (
      // <div>
      //   <CharacterCard value="h"/>
      //   <CharacterCard value="i"/>
      // </div>

      // <div>
      //   {
      //     Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
      //   }
      // </div>

      <div>
        <WordCard value="hello"/>
      </div>
    );
  }
}

export default App;
