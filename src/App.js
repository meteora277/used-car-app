import React from 'react';
import {createGlobalStyle} from 'styled-components'

import Menu from './Menu'
import Header from "./Header"
import Table from './Table';

const GlobalStyle = createGlobalStyle`
*,*::before, *::after {

  box-sizing: border-box;

}

`
const carData = [{
    name:"2017 Toyota Highlander",
    location:"1944 Scrimba Ln Youngstown, OH 44481",
    price:"17,400"  
    },{
    name:"2017 Toyota Highlander",
    location:"1944 Scrimba Ln Youngstown, OH 44481",
    price:"17,400"  
    },{
    name:"2017 Toyota Highlander",
    location:"1944 Scrimba Ln Youngstown, OH 44481",
    price:"17,400"  
    },{
    name:"2017 Toyota Highlander",
    location:"1944 Scrimba Ln Youngstown, OH 44481",
    price:"17,400"  
  }]

function App() {


  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Menu List={["New Cars", "Used Cars", "Dealership", "For Sale By The Owner"]}/>
      <Table cars={carData}/>
    </div>
  );
}

export default App;
