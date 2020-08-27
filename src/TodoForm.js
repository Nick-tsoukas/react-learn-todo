import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
            id: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo({...this.state, id: uuidv4()});
        this.setState({task: '', id: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>New Todo</h4>
                <div>
                    <input 
                    name="task"
                    value={this.state.task}
                    type="text"
                    onChange={this.handleChange}
                     />
                    <button className="TodoForm-button">Add Todo</button>
                </div>
            </form>
        )
    }
}

export default TodoForm;