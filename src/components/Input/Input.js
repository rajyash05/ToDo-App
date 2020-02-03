import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    font-size: ${props => props.theme.fontSize.sm};
    border-radius: ${props => props.theme.borderRadius};
    border: solid 1px ${props => props.theme.color.grey};
    &:focus {
        outline: none;
    }
`;

export default Input;