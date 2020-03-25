import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
//Math.floor(Math.random() * (max - min + 1)) + min
//To get random number between 2 values
function randomNumber() {
  const random = Math.floor(Math.random() * (27 - 23 + 1) + 23);
  return random;
}

//getFullYear will give me 2020, 2 refers to march month, calling randomNumber() returns
// a number between 23 to 27
function randomDate() {
  const date = String(new Date(new Date().getFullYear(), 2, randomNumber()));
  const dateInFormat = date.split(" ").slice(0, 4).join(" ");
  return dateInFormat;
}

// I am trying to assign a random date in this week to all my tasks
const arrayTodolist = [
  {
    description: 'Understand basics of react',
    deadline: randomDate()
  },
  {
    description: 'Identification of components in lesson plan',
    deadline: randomDate()
  },
  {
    description: 'Complete the exercise done in class by myself',
    deadline: randomDate()
  },
  {
    description: 'Finish the first react homework',
    deadline: randomDate()
  }
];
class Header extends React.Component {
  render () {
    return <h1>Todo List</h1>
  }
}

class TodoList extends React.Component {
  render () {
    const array = this.props.list;
    const result = array.map(item => {
    return <li>{item.description}, {item.deadline}</li>
    })
    return <ul>{result}</ul>;
  }
}
class Container extends React.Component {
  render() {
    return (
      <div className='list'>
        <Header />
        <TodoList list = {arrayTodolist}/>
      </div>);

  }
}

ReactDOM.render(<Container />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
