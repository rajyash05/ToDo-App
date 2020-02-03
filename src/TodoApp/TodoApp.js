import React, { Component } from 'react';
import Text from "../components/Text/Text";
import Flex from "../components/Flex/Flex";
import Space from "../components/Space/Space";
import Loader from "../components/Loader/Loader";
import request from "../utils/request";
import { TODO_API_URL } from "../constants/apiUrls";
import TodoList from "./TodoList";
import AddTodo from './AddTodo';

class TodoApp extends Component {
  state = {
    todos: [],
    newTodo: "",
    isLoading: false
  }

  getTodos = async () => {
    this.setState({ isLoading: true });
    let todos = await request.get(TODO_API_URL);
    this.setState({ todos: todos, isLoading: false });
  }

  componentDidMount() {
    this.getTodos();
  }

  onChangeHandler = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  createTodo = async () => {
    this.setState({ isLoading: true });

    let response = await request.post(TODO_API_URL, {
      "userId": 1,
      "title": this.state.newTodo,
      "completed": false
    });

    this.setState((prevState) => ({
      isLoading: false,
      todos: [
        // updating the id field to avoid react warning
        { ...response, id: prevState.todos.length + 1 },
        ...prevState.todos
      ],
      newTodo: ""
    }))
  }

  updateTodo = (todo, actionType) => {
    this.setState(prevState => ({
      todos: actionType === "DELETE"
        ? [...prevState.todos.filter((todoItem) => todoItem.id !== todo.id)]
        : [todo, ...prevState.todos.filter((todoItem) => todoItem.id !== todo.id)]
    }))
  }

  render() {
    const { todos, newTodo, isLoading } = this.state;

    return (
      <Space padding="20px 20px 0">
        <div>
          {isLoading ? (
            <Loader />
          ) : null}
          <Text size="xxl" weight="bold" color="primary" align="center">Todo App</Text>
          <AddTodo value={newTodo} createTodo={this.createTodo} changeHandler={this.onChangeHandler} />
          <Space padding="20px">
            <Flex flow="row" wrap="wrap">
              <TodoList title="Todo Items" updateTodo={this.updateTodo} todos={todos.filter(todo => !todo.completed)} />
              <TodoList title="Completed Items" updateTodo={this.updateTodo} todos={todos.filter(todo => todo.completed)} />
            </Flex>
          </Space>
        </div>
      </Space>
    );
  }
}

export default TodoApp;
