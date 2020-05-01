import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from "./UserList";
//import App from './App';
import searchContext from "./context";
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
const ContextProvider = searchContext.Provider;

function fetchGithubUsers(query) {
  if (query !== '') {
    const URL = `https://api.github.com/search/users?q=${query}`
    return fetch(URL).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
  }

}

function Header() {
  return (
    <div>
      <h1>Github user searcher</h1>
    </div>
  )
}

class Searchbar extends React.Component {
  state = {
    searchTerm: '',
    isLoading: false,
    usersArray: [],
    errorMessage: null
  }

  handleSearchChange = (event) => {
    const searchedValue = event.target.value
    this.setState({
      searchTerm: searchedValue
    })
    if (searchedValue !== '') {
      fetchGithubUsers(searchedValue)
        .then(data => {
          const users = data.items.map(user => user.login)
          console.log(users);
          this.setState({
            usersArray: users,
            isLoading: true
          })
        }).catch(error => {
          this.setState({ errorMessage: error })
        }).finally(() => this.setState({ isLoading: false }))
    }
  }

  render() {
    const contextValue = {
        usersArray: this.state.usersArray
    }
    return (
      <ContextProvider value={contextValue}>
      <div>
          <input type='text' placeholder='Search for user' value={this.state.searchTerm} onChange={this.handleSearchChange} />
          {this.state.isLoading ? <p>Loading...</p> : (this.state.usersArray.length === 0 || this.state.searchTerm === '') ? <p>No results</p> :
            <div className='list-container'>
              <ul>
                  <UserList />
              </ul>
            </div> 
          }
          {(this.state.errorMessage !== null) ? <p>{this.state.errorMessage}</p> : null}
      </div>
      </ContextProvider>
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
