import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const todosArray = [
  {
    "id": 1,
    "description": "Get out of bed"
  },
  {
    "id": 2,
    "description": "Brush teeth"
  },
  {
    "id": 3,
    "description": "Eat breakfast"
  }, 
  {
    "id": 4,
    "description": "Understand State and props"
  },
  {
    "id": 5,
    "description": "Passing the state through props"
  }
];
class Header extends React.Component {
  render() {
    return <h1>Todolist</h1>
  }
}
//I cannot pass a props that is in a state in one component and
//set that props again in state in different component
class TodoList extends React.Component {
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
    const array = this.props.todos;
    const result = array.map((item) => {
      return (
        <div className='todo-list-display' key={item.id}>
          <li style={{ 'textDecoration': this.state.checked.includes(item.id) ? 'line-through' : 'none' }}>{item.description}</li>
          <label>
            <input type="checkbox" name={item.id} onChange={this.handleCheckboxChange} defaultChecked={this.state.isChecked}></input>
          </label>
          <button onClick={() => this.props.onDeleteTodo(item.id)}>Delete</button>
        </div>)
    })
    return <ul>{result}</ul>;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue
    };
  }
  componentDidMount() {
    this.timer = setInterval(this.counter, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  counter = () => {
    const currentValue = this.state.value;
    this.setState({
      value: currentValue + 1
    });
  }

  render() {
    return <p>You have used {this.state.value} seconds on this website</p>
  }
}


class Container extends React.Component {
  state = {
    todos: []
  };

  handleAdd = () => {
    let tempList = this.state.todos;
    //This if else is to check if I have rendered all todos in UI and if so
    //display alert 
    {
      tempList.length > (todosArray.length) - 1 ? alert('No more Items in the Todo list!!') : 
      this.setState({
        todos: tempList.concat(todosArray[tempList.length])
      })
    }
  }

  //This item comes as argument from the delete button onclick where i pass the item.id
  handleDelete = (item) => {
    const newArray = this.state.todos.filter
    (oneTodo => oneTodo.id !== item)
    // newArray will have the items that didnot get deleted
    //So matching id is deleted and the rest is rerendered
    this.setState ({
      todos: newArray
    })

  }

  render() {
    return (
      <div className='todolist-container'>
        <Header />
        <Counter initialValue={0} />
        <button onClick={this.handleAdd}>Add todo</button>
        {this.state.todos.length === 0 ? <p>No items</p> : <TodoList todos={this.state.todos} onDeleteTodo={this.handleDelete} />}
      </div>);

  }
}

ReactDOM.render(<Container />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
