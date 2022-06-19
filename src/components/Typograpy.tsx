import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface StyleHeadingProps {
  size: string;
}

const Heading = styled.p<StyleHeadingProps>`
font-size: ${(props: StyleHeadingProps) => props.size};
color: black;
`;

interface Typograpy {
  children : React.ReactNode;
  variant : 'h1' | 'h2' ;
}

const Typograpy = (props: Typograpy) => {
  const {variant = 'h1'} = props;

  let font_size = '';

if(variant === 'h1'){
  font_size = '3rem';
}

if(variant === 'h2'){
  font_size = '1rem';
}

return <Heading size={font_size}>{props.children}</Heading>
};
export default Typograpy;