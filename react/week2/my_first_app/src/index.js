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
  }
];
class Header extends React.Component {
  render() {
    return <h1>Todolist</h1>
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.inputArray,
      checked: false
    };
    console.log(this.state.todos);
  }

  handleCheckboxChange = (event) => {
    const isSelected = event.target.checked
    console.log(isSelected);
    this.setState(previousState => ({
      checked: !previousState.checked
    })
    )
  }

  handleDelete = (index) => {
    const tempDeleteArray = [...this.state.todos];
    tempDeleteArray.splice(index, 1);
    this.setState({
      todos: tempDeleteArray
    })
    console.log(this.state.todos);

  }

  render() {
    const array = this.state.todos;
    console.log(array);
    console.log(this.state.checked);

    const result = array.map((item, index) => {
      return (
        <div className='todo-list-display' key={item.id}>
          <li style={{ 'textDecoration': this.state.checked ? 'line-through' : 'none' }}>{item.description}</li>
          <label>
            <input type="checkbox" name={index} onChange={this.handleCheckboxChange} defaultChecked={this.state.checked}></input>
          </label>
          <button onClick={() => this.handleDelete(index)}>Delete</button>
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
    list: []
  };

  handleDisplay = () => {
    let tempList = this.state.list;
    console.log(tempList);

    this.setState({
      list: tempList.concat(todosArray[tempList.length])
    })

  }

  render() {
    return (
      <div className='todolist-container'>
        <Header />
        <Counter initialValue={0} />
        <button onClick={this.handleDisplay}>Add todo</button>
        {this.state.list.length === 0 ? <p>No items</p> : <TodoList inputArray={this.state.list} />}
      </div>);

  }
}

ReactDOM.render(<Container />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
