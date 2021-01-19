import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './redux/store'
import './bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div class="d-block mx-auto secondDiv shadow-sm">
      <h1>TODO list</h1>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
