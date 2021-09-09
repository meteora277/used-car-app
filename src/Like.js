import React from "react";
import Save from "./assets/save.svg";
import SaveFilled from "./assets/save-filled.svg";

const style = { width: "25px", height: "25px" };

function Like(props) {
  return (
    <>
      {props.Saved ? (
        <img
          style={style}
          name={props.name}
          onClick={() => props.handleClick(props.id)}
          src={SaveFilled}
          alt="heart"
        />
      ) : (
        <img
          style={style}
          onClick={() => props.handleClick(props.id)}
          src={Save}
          alt="heart"
        />
      )}
    </>
  );
}
export default Like;
