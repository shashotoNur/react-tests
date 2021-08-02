import React from 'react';

import "./TodoList.css";

import TodoFooter from '../TodoFooter/TodoFooter';

const TodoList = ({ todos, setTodos }) =>
    {
        const updateTask = (id) =>
            {
                let updatedTasks = todos.map((todo) =>
                    {
                        if(todo.id === id)
                        {
                            todo.completed = !todo.completed;
                            return todo;
                        }
                        else return todo;
                    }
                );
                setTodos(updatedTasks);
            };

        const calcNumberOfIncompletedTasks = () =>
            {
                let count = 0;
                todos.forEach(todo => { if(!todo.completed) count++ });
                return count;
            };

        return (
            <div className="todolist-container">
                <div className="todos-container">
                    <div>
                        {
                            todos.map((todo, _index) => (
                                <div key={ todo.id } className={`todo-item ${todo.completed && "todo-item-active"}`} 
                                    onClick={() => updateTask(todo.id)} >
                                    {todo.task}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <TodoFooter numberOfIncompleteTasks={ calcNumberOfIncompletedTasks() } />
                </div>
            </div>
        );
    };

export default TodoList;