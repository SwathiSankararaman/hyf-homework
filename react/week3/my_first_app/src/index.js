import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './components/Header';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import "react-datepicker/dist/react-datepicker.css";

const root = document.getElementById('root');

function fetchTodo() {
  const URL = `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`
  return fetch(URL)
    .then(response => response.json())
}

class TodoListItem extends React.Component {

  render() {
    const isEdit = this.props.todo.canEdit
    const isUpdate = this.props.todo.canUpdate
    const isComplete = this.props.todo.completed
    const description = this.props.todo.description
    const deadline = this.props.todo.deadline
    const id = this.props.todo.id
    const toggle = this.props.onToggle
    const deleteList = this.props.onDelete
    const editList = this.props.onEdit
    const updateList = this.props.onUpdate
    return (
      <div className='list-render'>
        {isEdit ? <li className='list-display'><input onChange={(event) => {
          const newValue = event.target.value
          this.props.onChangeUpdate(newValue)
        }}></input></li> : <li style={{ 'textDecoration': isComplete ? 'line-through' : 'none' }}>{description} | {deadline}</li>}
        <label>
          <input type="checkbox" name={id} onChange={toggle}></input>
        </label>
        <button onClick={deleteList}>Delete</button>
        {isUpdate ? <button onClick={updateList}>Update</button> : <button onClick={editList}>Edit</button>}
      </div>
    )

  }

}

class TodoList extends React.Component {
  state = {
    list: [],
    date: [],
    isLoading: true,
    searchTerm: '',
    inputDate: '',
    textArea: ''
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetchTodo()
      .then(data => {
        const array = data.map(item => {
          item.completed = false
          item.canUpdate = false
          item.canEdit = false
          return item
        })
        this.setState({ list: array, isLoading: false })
      }
      )
  }

  handleAdd = (searchTerm, inputDate) => {
    const generatedId = Math.max(...this.state.list.map(todo => todo.id))
    console.log(this.state.list);

    if (searchTerm === '') {
      alert('Please enter the description')
    } else if (inputDate === '') {
      alert('Please enter the deadline')
    } else {
      this.state.list.push({ id: generatedId + 1, description: searchTerm, deadline: inputDate, completed: false, canUpdate: false, canEdit: false })
      this.setState({
        list: this.state.list,
        searchTerm: '',
        inputDate: '',
      })
    }
  }

  handleUpdateGen = (searchTerm, id) => {    
    const updatedList = this.state.list.map(oneTodo => {
      if (oneTodo.id === id) {
        oneTodo.description = searchTerm
        oneTodo.canUpdate = false
        oneTodo.canEdit = false
      }
      return oneTodo
    }) 
    console.log(updatedList);
    
    this.setState({
      list: updatedList
    })
  }


handleChangeDescription = (event) => {
  this.setState({
    searchTerm: event.target.value
  })

}

handleChangeTextArea = (childValue) => {
  this.setState({
    textArea: childValue
  })
}


handleChangeDeadline = (event) => {
  const today = new Date().toISOString().substr(0, 10)
  const formattedDate = event.target.value
if (formattedDate < today) {
  alert('Please enter a date starting from today')
} else {
  this.setState({
    inputDate: formattedDate
  })
}
}

handleSubmit = (event) => {
  event.preventDefault();
  this.handleAdd(this.state.searchTerm, this.state.inputDate)
}

handleDelete = (currentIndex) => {
  const newArray = this.state.list.filter
    ((oneTodo, index) => currentIndex !== index)
  // newArray will have the items that didnot get deleted
  //So matching id is deleted and the rest is rerendered
  this.setState({
    list: newArray
  })
}

handleEdit = (currentIndex) => {
  const newArray = this.state.list.map
    ((oneTodo, index) => {
      if (currentIndex === index) {
        return {
          ...oneTodo,
          canEdit: !oneTodo.canEdit,
          canUpdate: !oneTodo.canUpdate
        }
      } else {
        return oneTodo
      }
    })
  this.setState({
    list: newArray
  })
}



handleToggle = (currentIndex) => {
  const newArray = this.state.list.map
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
    list: newArray
  })
}

handleUpdate = (currentIndex) => {
  console.log(this.state.textArea);
  if (this.state.textArea === '') {
    alert('Please enter the description to update')
  } else {
  this.handleUpdateGen(this.state.textArea, currentIndex)
  }
}

render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Todo description</label>
          <input type='text' value={this.state.searchTerm} onChange={this.handleChangeDescription} />
        </div><br />
        <div>
          <label>deadline</label>
          <input type='date' value={this.state.inputDate} onChange={this.handleChangeDeadline} />
        </div><br />
        <button type='submit'>Add todo</button>
      </form>
      {this.state.isLoading ? <h1>Loading.....</h1> : this.state.list.length === 0 ? <p>No items</p> :
        <div>
          <ul>
            {this.state.list.map(
              (todo, index) => (
                <TodoListItem
                  todo={todo}
                  key={index}
                  area={this.state.textArea}
                  onDelete={() => this.handleDelete(index)}
                  onToggle={() => this.handleToggle(index)}
                  onEdit={() => this.handleEdit(index)}
                  onUpdate={() => this.handleUpdate(todo.id)}
                  onChangeUpdate={this.handleChangeTextArea}
                />
              ))}
          </ul>
        </div>
      }
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


