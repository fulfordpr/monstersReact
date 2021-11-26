import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBar} from './components/searchbar/searchbar.component.jsx'
import './App.css';
import './components/card-list/card-list.styles.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchBar:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) =>{
    this.setState({searchBar: e.target.value})
  }

  render(){
    const { monsters, searchBar } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchBar.toLowerCase()))
      return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBar 
            placeholder='search monster'
            handleChange={this.handleChange}
          />
          {/* <input type="search"  placeholder='search monster' 
          onChange={
            e => {
              this.setState({searchBar: e.target.value});
            }
          }/> */}
            <CardList monsters={filteredMonsters}/>
        </div>
      )
  }
}

export default App;
