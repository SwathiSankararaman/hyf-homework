import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.css';
import UserList from "./UserList";
import SearchContext from "./context";
import * as serviceWorker from './serviceWorker';
import UserRepo from './UserRepo';


const root = document.getElementById('root');

function fetchGithubUsers(query) {
  if (query !== '') {
    const URL = `https://api.github.com/search/users?q=${query}`
    return fetch(URL).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
  }
}

function fetchGithubUsersRepos(login) {
  const URL = `https://api.github.com/users/${login}/repos`
  return fetch(URL).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
}

function Header() {
  return (
    <div>
      <h1>Github user searcher</h1>
      <Link to={'/about'}>About this app</Link><br />
    </div >
  )
}

function About() {
  return (
    <div>
      <h2>About this App</h2>
      <p>This app helps you to search for a user in github with the help of
      a github API. It also displays some details of a particular user
      when clicked on them.
      </p>
      <h5>Technologies used to build this app</h5>
      <p>React</p>
      <Link to={'/'}>Home</Link>
    </div>
  )
}


const Home = () => (
  <div>
    <Header />
    <Searchbar />
  </div>
)

function Searchbar() {
    return (
      <SearchContext.Consumer>
        {context => {
          return (
            <div>
              <div className='list-container'>
                <input type='text' placeholder='Search for user' defaultValue={context.searchTerm} onChange={context.handleSearchChange} />
                {context.isLoading ? <p>Loading...</p> : (context.usersArray.length === 0) ? <p>No results</p> :
                  <div className='list-wrapper'>
                    <UserList />
                  </div>
                }
              </div>
              {<h1>{context.errorMessage}</h1>}
            </div>
          )
        }}
      </SearchContext.Consumer>
    )
}
 
class App extends React.Component {
  state = {
    searchTerm: '',
    isLoading: false,
    usersArray: [],
    reposArray: [],
    errorMessage: '',
    isClickedUser: false,
    isClickedRepos: false,
    selectedUser: ''
  }

  handleSearchChange = (event) => {
    const searchedValue = event.target.value
    this.setState({
      searchTerm: searchedValue
    })
    if (searchedValue !== '') {
      fetchGithubUsers(searchedValue)
        .then(data => {
          const users = data.items.map(user => user)
          this.setState({
            usersArray: users,
            isLoading: true
          })
        }).catch(error => {
          this.setState({
            errorMessage: error.message,
            usersArray: []
          })
        }).finally(() => this.setState({ isLoading: false }))
    }
  }

  handleClickSearch = (e, loginName) => {
    this.setState({ selectedUser: loginName });
  }

  fetchUserRepos = (loginName) => {
    fetchGithubUsersRepos(loginName)
      .then(data => {
        const repos = data.map(repo => repo)
        this.setState({
          reposArray: repos,
          isClickedUser: true,
          selectedUser: loginName,
          searchTerm: loginName
        })
      })
  }

  render() {
    const contextValue = {
      searchTerm: this.state.searchTerm,
      isLoading: this.state.isLoading,
      errorMessage: this.state.errorMessage,
      usersArray: this.state.usersArray,
      reposArray: this.state?.reposArray || [],
      handleClickSearch: this.handleClickSearch,
      fetchUserRepos: this.fetchUserRepos,
      handleSearchChange: this.handleSearchChange,
      loginName: this.state.selectedUser
    }
    return (
      <SearchContext.Provider value={contextValue}>
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/about' exact>
                <About />
            </Route>
            <Route path='/profile/:login'>
                <UserRepo />
            </Route>
          </Switch>
        </div>
        </BrowserRouter>
      </SearchContext.Provider>
    )
  }
}

ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();