/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import styled from 'styled-components';

import Like from './Like'

const StyledItem = styled.div`
    
    display:flex;
    justify-content:flex-start;
    font-family: Lexend Deca;
    font-size: 22px;
    padding: 0 1.5rem;
    margin:0;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 22px;
        ${props => props.TitleBar ? "color: white; font-size: 14px" : null}
    }
    p:nth-child(1), p:nth-child(2), p:nth-child(3){
        width: 30%;
        padding-right: 1rem;
    }

    p:nth-child(2){
        color: #686868;
        font-size:18px;
        ${ props => props.TitleBar && "color:white;"}
    }
    
    ${ props => props.TitleBar && "background-color:#008AD8; border-radius: 0.3rem; "}
`
const StyledUl = styled.ul`
    padding:0;
`

function Table(props){

    const [likes, setLikes] = useState(props.cars.map(obj => (obj.liked)))

    function handleClick(key){

        setLikes(prevLikes => ({...prevLikes, [key]:!prevLikes[key] }))
    
    }

    const CarList = props.cars.map((item,i) =>(
        <StyledItem key={i}>
            <p>{item.name}</p>
            <p>{item.location}</p>
            <p>${item.price}</p>
            <p><Like handleClick={handleClick} id={i} Saved={likes[i]}/></p>
        </StyledItem>
        
    ))
    
    return(
        <div>
            <StyledUl>
                <StyledItem TitleBar>
                    <p>CAR DETAILS</p>
                    <p>LOCATION</p>
                    <p>PRICE</p>
                    <p>ACTION</p>
                </StyledItem>
                <br/>
                {CarList}

            </StyledUl>
        </div>
    )
}
export default Table