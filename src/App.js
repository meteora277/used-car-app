import React from 'react';
import {createGlobalStyle} from 'styled-components'

import Header from "./Header"
import Table from './Table';

const GlobalStyle = createGlobalStyle`
*,*::before, *::after {

  box-sizing: border-box;

}
html{
  background-color:#f4f4f4;
}

body{

  padding: clamp(1rem, 5vw, 6rem);
}

`
const carData = [{
    name:"2017 Toyota Highlander",
    location:"1944 Scrimba Ln Youngstown, OH 44481",
    price:"17,400",
    liked: true  
    },{
    name:"2012 Toyota Tundra 4x4",
    location:"301 Fantasy Dr Beverly Hills, CA 90210",
    price:"23,900",
    liked: false   
    },{
    name:"2004 Dodge Ram 4x4",
    location:"9104 Falsety Ave AnonyVille, FL 40440",
    price:"7,998",
    liked: false   
    },{
    name:"2021 Tesla Model 3",
    location:"993 Fiscal St Boulder, CO 93391",
    price:"37,490",
    liked: false   
  }]

function App() {


  return (
    <div>
      <GlobalStyle/>
      <Header/>
      
      <Table cars={carData}/>
    </div>
  );
}

export default App;
