import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import searchContext from "./context";
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

function fetchGithubUsers(query) {
  const URL = `https://api.github.com/search/users?q=${query}`
  return fetch(URL).then(response => response.json())

}

function Header() {
  return (
    <div>
      <h1>Github user searcher</h1>
    </div>
  )
}

class UserList extends React.Component {
  render() {
    return
  }
}

class Searchbar extends React.Component {
  state = {
    searchTerm: '',
    isLoading: false,
    usersArray: []
  }

  fetchUsers() {
    const query = this.state.searchTerm;
    console.log(query);
    fetchGithubUsers(query)
      .then(data => {
        const users = data.items.map(user => user.login)
        console.log(users);
        
      })
  }

  handleSearchChange = (event) => {
    const searchedValue = event.target.value
    this.setState({
      searchTerm: searchedValue,
      isLoading: true
    })
    this.fetchUsers()
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Search for user' value={this.state.searchTerm} onChange={this.handleSearchChange} />
        {this.state.isLoading ? <p>Loading...</p> : this.state.usersArray.length === 0 ? <p>No results</p>:
          <UserList />
        }
      </div>
    )
  }
}



function App() {
  return (
    <div className='container'>
      <Header />
      <Searchbar />
    </div>
  )
}




ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
