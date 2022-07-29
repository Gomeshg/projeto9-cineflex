import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from 'react';
import {createGlobalStyle} from 'styled-components';

import Header from "./Header"
import ExploreMovies from "./ExploreMovies";



export default function App(){

    // const [bolinha, setBolinha] = useState(0);

    return(
        <BrowserRouter>
            <GlobalStyle/>

            <Header/>

            <Routes>
                <Route path="/" element={<ExploreMovies/>}  />
            </Routes>

        </BrowserRouter>
    );
}


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }
`