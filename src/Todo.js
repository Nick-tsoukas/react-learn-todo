import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    handleEdit(){
        this.setState((state) => ({
            ...state,
            edit: true
        }));
    }

    render(){
        let result;
        if(this.state.edit) {
            result = (
                <div>
                <form>
                    <input type="text" />
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