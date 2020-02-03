import styled, { css } from 'styled-components';

const Flex = styled.div`
    ${props => css`
        display: flex;
        flex-flow: ${props.flow || 'column'};
        flex-grow: ${props.grow || 1};
        justify-content: ${props.justifyContent || ''};
        align-items: ${props.alignItems || ''};
        flex-wrap: ${props.wrap || ''};
    `}  
`;

export default Flex;