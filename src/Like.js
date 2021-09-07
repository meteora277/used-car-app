import React from 'react';
import Save from './assets/save.svg'
import SaveFilled from './assets/save-filled.svg'

function Like(props){

    return(
        <>
            {props.Saved ? <img name={props.name} onClick={props.handleClick} src={SaveFilled} alt="heart"/> : <img onClick={props.handleClick} src={Save} alt="heart"/>}
        </>
    )
}
export default Like