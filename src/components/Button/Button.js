import styled from "styled-components";

const Button = styled.button`
    padding: 10px 20px;
    color: ${props => props.solid ? props.theme.color.white : props.theme.color.primary};
    background: ${props => props.solid ? props.theme.color.primary : props.theme.color.white};
    font-size: ${props => props.theme.fontSize.sm};
    border: solid 2px ${props => props.theme.color.primary};
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition: all 0.5s;
    text-transform: uppercase;
    &:focus {
        outline: none;
        color: ${props => props.solid ? props.theme.color.white : props.theme.color.primaryDark};
        background: ${props => props.solid ? props.theme.color.primaryDark : props.theme.color.white};
        border: solid 2px ${props => props.theme.color.primaryDark};
    }
`;

export default Button;