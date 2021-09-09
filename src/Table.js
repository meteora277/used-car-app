/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import styled from "styled-components";

import Like from "./Like";

const Column = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;

  ${(props) => props.car && "width: 30%; padding-right: 1rem;"}
  ${(props) => props.second && "color: #686868; font-size:18px;"}
    ${(props) =>
    props.white &&
    "color:white; font-style: normal; font-weight: normal; font-size: 14px; line-height: 17px;"}

    @media(max-width:450px) {
    width: 100%;
    padding-right: 0;
    ${(props) => props.price && "display:inline-block; width:90%;"}
    ${(props) => props.heart && "display:inline-block; width: 10%;"}
  }
`;

const StyledUl = styled.ul`
  padding: 0;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: Lexend Deca;
  padding: 0 1.5rem;
  margin: 0;

  @media (max-width: 450px) {
    display: block;
  }

  ${(props) =>
    props.TitleBar &&
    "background-color:#008AD8; border-radius: 0.3rem; color: white"}
  ${(props) => props.hidden && "background:blue;"}
    ${(props) => props.hidden && "@media(max-width:450px){display:none;}"}
`;

function Table(props) {
  const [likes, setLikes] = useState(props.cars.map((obj) => obj.liked));

  function handleClick(key) {
    setLikes((prevLikes) => ({ ...prevLikes, [key]: !prevLikes[key] }));
  }

  const CarList = props.cars.map((item, i) => (
    <StyledItem key={i}>
      <Column car>{item.name}</Column>
      <Column car second>
        {item.location}
      </Column>
      <Column car price>
        ${item.price}
      </Column>
      <Column heart>
        <Like handleClick={handleClick} id={i} Saved={likes[i]} />
      </Column>
    </StyledItem>
  ));

  return (
    <div>
      <StyledUl>
        <StyledItem TitleBar hidden>
          <Column car white>
            CAR DETAILS
          </Column>
          <Column car white>
            LOCATION
          </Column>
          <Column car white>
            PRICE
          </Column>
          <Column white>ACTION</Column>
        </StyledItem>
        <br />
        {CarList}
      </StyledUl>
    </div>
  );
}
export default Table;
