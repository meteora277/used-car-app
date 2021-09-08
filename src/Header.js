import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from "./Menu"
import menuImage from './assets/menu.svg'

const StyledHeader = styled.header`

    font-family: 'Lexend Deca', sans-serif;
    display:flex;
    justify-content: space-between;

    @media(max-width:500px){
        
        flex-direction:column;
    }
`

const StyledH1 = styled.div`
    font-size: 32px;
    line-height: 40px;
`
const StyledSearch = styled.div`
    position :relative;
    display:flex;
    @media(max-width:500px){
        padding: 0 1.5rem;
    }
`
const StyledInput = styled.input`

    padding: 0;
    margin:0;
    height: 2.5rem;
    font-size: 1.1rem;
    border-radius: 5rem;
    border: none;
    padding-left: 1rem;

    &:focus{
        border: 1px solid #008AD8;
        outline: none
    }
    @media(max-width:500px){
        width:100%;
        
    }
`


function Header(){

    const [showMenu, setShowMenu] = useState(false)

    function displayMenu(){

        setShowMenu(!showMenu)

    }
    

    return(
        <StyledHeader>
            <div>
                <StyledH1>Available Cars</StyledH1>
                <p>There are 15 cars that match your criteria</p> 
            </div>
            <StyledSearch>
                <StyledInput type="text" placeholder="Search"></StyledInput>
                <img style={{height:"30px"}}src={menuImage} onClick={displayMenu} alt="menu button"/>
                <Menu IsShown={showMenu} List={["New Cars", "Used Cars", "Dealership", "For Sale By The Owner"]}/>
                
            </StyledSearch>
        </StyledHeader>
    )

}

export default Header