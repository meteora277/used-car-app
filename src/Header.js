import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from "./Menu"

const StyledHeader = styled.header`

    font-family: 'Lexend Deca', sans-serif;
    display:flex;
    justify-content: space-between;
`

const StyledH1 = styled.div`
    font-size: 32px;
    line-height: 40px;
`
const StyledSearch = styled.div`
    position :relative;
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
                <input type="text" placeholder="Search"/>
                <button onClick={displayMenu}>dots</button>
                <Menu IsShown={showMenu} List={["New Cars", "Used Cars", "Dealership", "For Sale By The Owner"]}/>
            </StyledSearch>
        </StyledHeader>
    )

}

export default Header