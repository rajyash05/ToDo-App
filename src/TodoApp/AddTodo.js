import React from 'react';
import Flex from "../components/Flex/Flex";
import Space from "../components/Space/Space";
import Button from "../components/Button/Button";
import Input from '../components/Input/Input';
import styled from 'styled-components';

const AddTodoInput = styled(Input)`
  width: 40%;
  min-width: 300px;
`;

const AddTodo = ({ createTodo, changeHandler, value }) => (
    <Space padding="20px 0 10px">
        <Flex flow="row" justifyContent="center">
            <AddTodoInput
                placeholder="Enter todo item"
                value={value}
                onChange={changeHandler}
            />
            <Space margin="0 0 0 10px">
                <Button onClick={createTodo} solid>Add</Button>
            </Space>
        </Flex>
    </Space>
);

export default AddTodo;