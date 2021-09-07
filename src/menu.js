import React from 'react';

function Menu(props){

    const MenuItems = props.List.map((item, i)=> (
        <div key={i}><input type="checkbox"/>{item}</div>
        
        )
    )

    return(
        <div>
            {MenuItems}
        </div>
    )

}
export default Menu