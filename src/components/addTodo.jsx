import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import '../bootstrap.min.css'

function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleAdd = () => {
        setValue('')
        if(value != ''){
        addTodo(value)
        }
    }

    return (
        <>
            <div class="text-center addComponent">
            <TextField id="standard-basic" class="d-block txtComponent" type="text" onChange={handleOnChange} value={value} placeholder="Add a todo" />
            <Button variant="contained" color="primary" onClick={handleAdd}>+</Button>
            </div>
        </>
    )
}

export default connect(null, { addTodo })(AddTodo)
