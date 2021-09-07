import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
    transition-duration: 0.3s;
    background: white;
    position:absolute;
    margin-top: 1rem;
    padding: clamp(0.5rem, 2vw, 2rem);
    border-radius:0.3rem;
    box-shadow: 11px 18px 54px rgba(0, 0, 0, 0.11);
    
    ${props => props.IsShown ? "display:block; opacity:100%;" : "display:none; opacity:0%" }
`
const StyledItem = styled.div`
    padding:1rem;
`

function Menu(props){

    const MenuItems = props.List.map((item, i)=> (

        
        <StyledItem key={i}><input type="checkbox"/>{item}</StyledItem>
        
        )
    )

    return(
        <StyledMenu IsShown={props.IsShown}>
            {MenuItems}
        </StyledMenu>
    )

}
export default Menu