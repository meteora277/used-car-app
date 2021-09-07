import React from 'react';

function Header(){

    return(
        <div>
            <div>
                <h1>Available Cars</h1>
                <p>There are 15 cars that match your criteria</p> 
            </div>
            <input type="text" placeholder="Search"/>
            <button>dots</button>
        </div>
    )

}

export default Header