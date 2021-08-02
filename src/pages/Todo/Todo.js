
import React, { useState } from 'react';
import { Container } from "react-bootstrap";

import "./Todo.css";

import Header from '../../components/Header/Header';
import AddInput from '../../components/AddInput/AddInput';
import TodoList from '../../components/TodoList/TodoList';


const TodoPage = () =>
    {
        const [todos, setTodos] = useState([]);

        return (
            <div>
                <Container>
                    <div className="todo">
                        <Header title="Todo" />
                        <AddInput setTodos={setTodos} todos={todos} />
                        <TodoList todos={todos} setTodos={setTodos} />
                    </div>
                </Container>
            </div>
        );
    };

export default TodoPage;
