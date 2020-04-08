import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const todosArray = [
  {
    "id": 1,
    "description": "Get out of bed",
    "completed": false

  },
  {
    "id": 2,
    "description": "Brush teeth",
    "completed": false
  },
  {
    "id": 3,
    "description": "Eat breakfast",
    "completed": false
  }
];
class Header extends React.Component {
  render() {
    return <h1>Todolist</h1>
  }
}

function TodoListItem(props) {
  const isComplete = props.todo.completed;
  return (
    <div>
      <li style={{ 'textDecoration': isComplete ? 'line-through' : 'none' }}>{props.todo.description}</li>
      <label>
        <input type="checkbox" name={props.todo.id} onChange={props.onToggle}></input>
      </label>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
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


class TodoList extends React.Component {
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
  handleDelete = (currentIndex) => {
    const newArray = this.state.todos.filter
      ((oneTodo, index) => currentIndex !== index)
    // newArray will have the items that didnot get deleted
    //So matching id is deleted and the rest is rerendered
    this.setState({
      todos: newArray
    })
  }

  handleToggle = (currentIndex) => {
    const newArray = this.state.todos.map
    ((oneTodo, index) => {
      if (currentIndex === index) {
        return {
          ...oneTodo,
          completed: !oneTodo.completed
        }
      } else {
        return oneTodo
      }
    })
    this.setState({
      todos: newArray
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add todo</button>
        {this.state.todos.length === 0 ? <p>No items</p> : 
        <div>
          <ul>
            {this.state.todos.map(
            (todo, index) => (
              <TodoListItem 
              todo={todo} 
              key={index}
              onDelete={() => this.handleDelete(index)}
              onToggle={() => this.handleToggle(index)}/>
            ))}
        </ul>
        </div>
        }
      </div>);

  }
}

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
