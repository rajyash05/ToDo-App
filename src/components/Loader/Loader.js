import React from "react";
import styled, { withTheme, keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Text from "../Text/Text";

const LoaderContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.color.whiteLight};
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
    padding: 20px;
    animation: ${rotate} 0.5s linear infinite;
`;

const Loader = ({ theme }) => (
    <LoaderContainer>
        <SpinnerContainer>
            <AiOutlineLoading3Quarters color={theme.color.secondary} size="50px" />
        </SpinnerContainer>
        <Text size="xl" color="secondary" weight="light">Loading...</Text>
    </LoaderContainer>
)
export default withTheme(Loader);