import React from 'react'
import { connect } from 'react-redux'
import { _ } from 'underscore'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'
import { deleteTodo, toggleTodo } from '../redux/actions'
import { Trash } from 'react-bootstrap-icons'
import Checkbox from '@material-ui/core/Checkbox';

function Todo({ todo, id, toggleTodo }) {
    return (
        <div class="d-flex bd-highlight">
            <Checkbox onClick={() => toggleTodo(id)}></Checkbox>
            <li className={todo.completed ? 'completed shadow-sm text-left p-2 flex-fill bd-highlight' : 'notCompleted text-left p-2 flex-fill bd-highlight'} //class
            >{todo.content}</li><div><button onClick={() => deleteTodo(id)} className="btn buttonErase" type="button"><Trash></Trash></button></div></div> //view
    )
}

function TodoList({ todos, toggleTodo }) {
    return (
        <div class="text-center">{
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} toggleTodo={toggleTodo} todo={todos[id]} />
        ))
}</div>
    )
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { todos: state.todos.data }
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            todos: _.pick(state.todos.data, (todo) => todo.completed)
        })
    } else {
        return ({
            todos: _.pick(state.todos.data, (todo) => !todo.completed)
        })
    }
}

export default connect(mapState, { toggleTodo })(TodoList);