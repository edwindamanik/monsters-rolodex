import React, { Component } from "react";
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search-box/search-box.component';

class App extends Component{

  constructor() {
    super();

    this.state = {
      monsters: [],
      inputField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({ monsters:json }))
  }

  render() {

    const { monsters, inputField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(inputField.toLowerCase()));

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search
          placeholder="Search Monsters"
          onChange={e => this.setState({ inputField:e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;