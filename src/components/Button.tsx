import React, {ReactNode} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
background-color : ${(props) => props.color};
padding : 5px 10px;
color : white;
border-radius : 10px;
border : none;
`;

interface ButtonProps {
    children : ReactNode;
    variant : 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
    let ButtonColor;

    if(props.variant === 'primary'){
        ButtonColor = 'green';
    }else if(props.variant === 'secondary'){
        ButtonColor = 'Blue';
    }
    return <StyledButton color={ButtonColor}>{props.children}</StyledButton>
}

export default Button;