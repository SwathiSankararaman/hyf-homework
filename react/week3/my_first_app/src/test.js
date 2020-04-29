import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './components/Header';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

function fetchTodo() {
    const URL = `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`
    return fetch(URL)
        .then(response => response.json())
}


class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            checked: []
        };
    }

    handleCheckboxChange = (event) => {
        const temp = event.target.checked
        //Eventhough the item.id is int when it is passed inside name attribute in input tag
        // it changes to string thats why parseInt
        const specificTodo = parseInt(event.target.name)
        //When I check the box my temp becomes true and executes if part
        if (temp) {
            //When checked I push that particular id to my checked array and update the state
            this.state.checked.push(specificTodo)
            this.setState({
                isChecked: temp,
                checked: this.state.checked
            })
        } else {
            //When I uncheck, I get the index of the unchecked todo and remove it from checked array and update the state
            const index = this.state.checked.indexOf(specificTodo)
            this.state.checked.splice(index, 1);
            this.setState({
                isChecked: temp,
                checked: this.state.checked
            })
        }
    }

    render() {
        const array = this.props.inputArray;
        return (        <div>
          <ul>
              {array.map((item, index) => (
                  <Todo
                      todo={item}
                      key={index}
                      checked={this.state.checked}
                      checkboxChange={() => this.handleCheckboxChange}
                      deleteTodo={() => this.props.onDeleteTodo(item.id)}
                  />
              ))}}
          </ul>
      </div>)

    }
}


function Todo(props) {
    return(
        <div>
        <li style = {{ 'textDecoration': props.checked.includes(props.todo.id) ? 'line-through' : 'none' }}> {props.todo.description} | {props.todo.deadline}</li >
    <label>
        <input type="checkbox" name={props.todo.id} onChange={props.checkboxChange} defaultChecked={false}></input>
    </label>
    <button onClick={props.deleteTodo}>Delete</button>
    <button>Edit</button>
    </div>
    )
}


class TodoList extends React.Component {
    state = {
        list: [],
        date: [],
        isLoading: true,
        searchTerm: ''
    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetchTodo()
            .then(data => this.setState({ list: data, isLoading: false }))
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleDelete = (item) => {
        const newArray = this.state.list.filter
        (oneTodo => oneTodo.id !== item)
        // newArray will have the items that didnot get deleted
        //So matching id is deleted and the rest is rerendered
        this.setState ({
          list: newArray
        })
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Todo description
            <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
                    </label><br />
                    <label>deadline
            <input type='text' />
                    </label><br />
                    <input type='submit' value='Add todo' />
                </form>
                {this.state.isLoading ? <h1>Loading.....</h1> : this.state.list.length === 0 ? <p>No items</p> : <TodoListItem inputArray={this.state.list} onDeleteTodo={this.handleDelete}/>}
            </div>
        )
    }
}

// Component that returns todolist component
function App() {
    return (
        <div>
            <Header />
            <Counter initialValue={0} />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
