/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`

`

function Table(props){

    const CarList = props.cars.map(item =>(
        <StyledItem>
            
            <h3>{item.name}</h3>
            <p>{item.location}</p>
            <p>{item.price}</p>
            <div>Like</div>
        </StyledItem>
    ))
    
    return(
        <div>
            <ul>
                <StyledItem>
                    <p>CAR DETAILS</p>
                    <p>LOCATION</p>
                    <p>PRICE</p>
                    <p>ACTION</p>
                </StyledItem>

                {CarList}

            </ul>
        </div>
    )
}
export default Table