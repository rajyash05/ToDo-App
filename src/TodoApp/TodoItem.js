import React from "react";
import styled, { withTheme } from "styled-components";
import Flex from "../components/Flex/Flex";
import Space from "../components/Space/Space";
import Text from "../components/Text/Text";
import Popover from "../components/Popover/Popover";
import Size from "../components/Size/Size";
import Input from "../components/Input/Input";
import { FaEllipsisV } from 'react-icons/fa';
import Button from "../components/Button/Button";
import request from "../utils/request";
import { TODO_API_URL } from "../constants/apiUrls";
import Loader from "../components/Loader/Loader";

const TodoItemContainer = styled(Flex)`
    border: solid 1px ${props => props.theme.color.grey};
    background: ${props => props.theme.color.white};
    border-radius: ${props => props.theme.borderRadius};
`;

const IconContainer = styled.div`
    padding: 10px;
    line-height: 12px;
    border-radius: 50%;
    cursor: pointer;
    background: ${props => props.theme.color.secondaryLight};
    transition: all 0.5s;
    &:hover {
        outline: none;
        background: ${props => props.theme.color.secondary};
    }
`
const Options = styled.div`
    background: ${props => props.theme.color.white};
    border: solid 1px ${props => props.theme.color.grey};
    border-radius: ${props => props.theme.borderRadius};
    padding: 10px;
    box-shadow: 1px 1px 4px ${props => props.theme.color.boxShadow};
`;

const Option = styled(Text)`
    color: ${props => props.theme.color.black};
    font-weight: ${props => props.theme.fontWeight.normal};
    padding: 5px 10px;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.color.primary};
    }
`;

const TodoEditActionContainer = styled(Flex)`
    flex: 0;
`;

const EditTodoInput = styled(Input)`
    width: 50%;
    margin-right: 10px;
`;

class TodoItem extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isOpen: false,
            isEdit: false,
            isLoading: false,
            todoTitle: props.todo.title,
        }
    }

    toggleIsOpen = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    toggleIsEdit = () => this.setState(prevState => ({
        isOpen: false,
        isEdit: !prevState.isEdit,
        todoTitle: this.props.todo.title
    }));

    onChangeTodoTitle = (event) => this.setState({
        todoTitle: event.target.value
    })

    editTodo = async () => {
        let { updateTodo, todo } = this.props;
        this.setState({ isLoading: true });

        let response = await request.patch(`${TODO_API_URL}/${todo.id}`, { title: this.state.todoTitle });
        if (updateTodo) {
            updateTodo({ ...todo, ...response }, "EDIT");
        }

        this.toggleIsEdit();
        this.setState({ isLoading: false });
    }

    completeTodo = async () => {
        let { updateTodo, todo } = this.props;
        this.toggleIsOpen();
        this.setState({ isLoading: true });

        let response = await request.patch(`${TODO_API_URL}/${todo.id}`, { completed: true });
        if (updateTodo) {
            updateTodo({ ...todo, ...response }, "EDIT");
        }
    }

    deleteTodo = async () => {
        let { updateTodo, todo } = this.props;
        this.toggleIsOpen();
        this.setState({ isLoading: true });

        await request.delete(`${TODO_API_URL}/${todo.id}`);
        updateTodo(todo, "DELETE");
    }

    render() {
        const { todo, theme } = this.props;
        const { isOpen, isEdit, todoTitle, isLoading } = this.state;

        return (
            <Space padding="15px 20px" margin="0 0 10px">
                <TodoItemContainer flow="row" alignItems="center" justifyContent="space-between">
                    {isLoading ? (
                        <Loader />
                    ) : null}
                    {
                        isEdit ? (
                            <React.Fragment>
                                <EditTodoInput value={todoTitle} onChange={this.onChangeTodoTitle} />
                                <TodoEditActionContainer flow="row">
                                    <Space margin="0 10px 0 0">
                                        <Button solid onClick={this.editTodo}>Edit</Button>
                                    </Space>
                                    <Button onClick={this.toggleIsEdit}>Cancel</Button>
                                </TodoEditActionContainer>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    <Text size="md" weight="light">
                                        {todo.title}
                                    </Text>
                                    <Popover
                                        trigger={() => (
                                            <IconContainer onClick={this.toggleIsOpen}>
                                                <FaEllipsisV color={theme.color.white} />
                                            </IconContainer>
                                        )}
                                        isOpen={isOpen}
                                        togglePopover={this.toggleIsOpen}
                                    >
                                        <Size width="120px">
                                            <Space padding="0 10px 10px">
                                                <div>
                                                    <Options>
                                                        {todo.completed ? null : <Option size="md" onClick={this.toggleIsEdit}>Edit</Option>}
                                                        {todo.completed ? null : <Option size="md" onClick={this.completeTodo}>Done</Option>}
                                                        <Option size="md" onClick={this.deleteTodo}>Delete</Option>
                                                    </Options>
                                                </div>
                                            </Space>
                                        </Size>
                                    </Popover>
                                </React.Fragment>
                            )
                    }
                </TodoItemContainer>
            </Space>

        );
    }
}

export default withTheme(TodoItem);