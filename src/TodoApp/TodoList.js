import React from "react";
import styled from "styled-components";
import Text from "../components/Text/Text";
import TodoItem from "./TodoItem";
import Space from "../components/Space/Space";

const Container = styled.div`
    width: 50%;
    min-width: 500px;
    box-sizing: border-box;
    padding: 0 15px;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const TodoListContainer = styled.div`
    padding: 20px 10px;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.color.greyLight};
`;

const ListContainer = styled.div`
    padding: 0 10px;
    max-height: calc(100vh - 300px);
    overflow: auto;
`;

const TodoList = ({ title, todos, updateTodo }) => (
    <Container>
        <Space padding="0 10px 10px">
            <Text align="center" size="xl" weight="bold">{title}</Text>
        </Space>
        <TodoListContainer>
            <ListContainer>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} updateTodo={updateTodo} />
                ))}
            </ListContainer>
        </TodoListContainer>
    </Container>
)

export default TodoList;