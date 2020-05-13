import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.css';
import UserList from "./UserList";
import searchContext from "./context";
import * as serviceWorker from './serviceWorker';
import UserRepo from './UserRepo';


const root = document.getElementById('root');
const ContextProvider = searchContext.Provider;

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

class Searchbar extends React.Component {
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
          console.log(data);
          const users = data.items.map(user => user)
          console.log(users);
          this.setState({
            usersArray: users,
            isLoading: true
          })
        }).catch(error => {
          console.log(error.message);
          this.setState({
            errorMessage: error.message,
            usersArray: []
          })
        }).finally(() => this.setState({ isLoading: false }))
    }
  }

  handleClickSearch = (event, loginName) => {
    event.preventDefault();
    console.log(loginName);
    fetchGithubUsersRepos(loginName)
      .then(data => {
        const repos = data.map(repo => repo)
        console.log(repos)
        this.setState({
          reposArray: repos,
          isClickedUser: true,
          selectedUser: loginName,
          searchTerm: loginName
        })
      })
  }

  handleClickRepos = (event) => {
    event.preventDefault();
    this.setState({
      isClickedRepos: true
    })
  }

  render() {
    const contextValue = {
      usersArray: this.state.usersArray,
      isClickedUser: this.state.isClickedUser,
      isClickedRepos: this.state.isClickedRepos,
      reposArray: this.state.reposArray,
      handleClickSearch: this.handleClickSearch,
      handleClickRepos: this.handleClickRepos,
      loginName: this.state.selectedUser
    }
    return (
      <ContextProvider value={contextValue}>
        <div>
          <div className='list-container'>
            <input type='text' placeholder='Search for user' value={this.state.searchTerm} onChange={this.handleSearchChange} />
            {this.state.isLoading ? <p>Loading...</p> : (this.state.usersArray.length === 0 || this.state.searchTerm === '') ? <p>No results</p> :
              <div className='list-wrapper'>
                  <UserList />
              </div>
            }
          </div>
          {<h1>{this.state.errorMessage}</h1>}
        </div>
      </ContextProvider>
    )
  }
}

const Home = () => (
  <div>
    <Header />
    <Searchbar />
  </div>
)



function App() {
  return (
    <BrowserRouter>
        <div className='container'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
           <Route path='/profile' component={UserRepo} exact>
          </Route> 
        </Switch>
        </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();