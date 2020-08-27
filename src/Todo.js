import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            task: this.props.task,
            id: this.props.id
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    handleUpdate(e){
        e.preventDefault();
        this.props.update(this.state.task,this.props.id);
    }

    handleEdit(){
        this.setState((state) => ({
            ...state,
            edit: true
        }));
    }

    handleChange(e){
       this.setState({
           [e.target.name] : e.target.value
       })
    }

    render(){
        let result;
        if(this.state.edit) {
            result = (
                <div>
                <form onSubmit={this.handleUpdate}>
                    <input name="task" onChange={this.handleChange} value={this.state.task}  type="text" />
                    <button className="TodoForm-button">Update</button>
                </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                <p className="Todo-item">{this.props.task}</p>
                <i onClick={this.handleEdit} className="far fa-edit margin-right"></i>
                <i onClick={this.handleRemove} className="fas fa-trash"></i>
                </div>
            )
        }
        return result
    }
}

export default Todo;