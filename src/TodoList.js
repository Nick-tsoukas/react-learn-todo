import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [{task: 'Take the dog out for a walk', id: uuidv4()}, {task: 'Go for a one hour run', id: uuidv4()}]
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.update = this.update.bind(this);
    };

    addTodo(todo){
        this.setState(state => ({
           todos: [...state.todos, todo] 
        }));
    }

    removeTodo(id){
        // fliter todos and remove one by id and then set state 
        let newTodos = this.state.todos.filter((t) => {
            return t.id !== id;
        });
        this.setState({todos: newTodos});
    }

    update(task,id){
        let newTodos = this.state.todos.map((todo) => {
            console.log(todo.id, id)
            if(todo.id === id) {
                return { ...todo, task: task}
            } else {
                return todo
            }
        });
        this.setState({todos: newTodos})
    }


    render(){
        return(
            <div className="TodoList">
                <h1>Todo list</h1>
                <p>Simple Todo list in react</p>
                <hr />
                {this.state.todos.map((t) => {
                    return <Todo key={uuidv4()} update={this.update} removeTodo={this.removeTodo} task={t.task} id={t.id} />
                })}
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;