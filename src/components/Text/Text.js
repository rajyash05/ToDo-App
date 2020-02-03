import { default as styled, css } from 'styled-components';

const Text = styled.div`
   ${props => css`
      color: ${props.theme.color[props.color] || props.theme.color.black};
      font-size: ${props.theme.fontSize[props.size] || props.theme.fontSize.md};
      font-weight: ${props.theme.fontWeight[props.weight] || props.theme.fontWeight.normal};
      line-height: ${props.lineHeight || 1.4};
      font-family: ${props.theme.fontFamily[props.family] || props.theme.fontFamily.sansSerif};
      text-align: ${props.align || "left"};
   `}
`;

export default Text; 
