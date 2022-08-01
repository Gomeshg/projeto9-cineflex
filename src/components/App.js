import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createGlobalStyle} from 'styled-components';

import {useState} from 'react';

import Header from "./Header"
import ExploreMovies from "./ExploreMovies/ExploreMovies";
import SelectSession from "./SelectSession/SelectSession";
import SelectSeats from "./SelectSeats/SelectSeats";
import Sucess from "./Sucess/Sucess"


export default function App(){

    const [infoRequest, setInfoRequest] = useState({});

    return(
        <>
          <GlobalStyle/>
          <BrowserRouter>

              <Header/>

              <Routes>
                  <Route path="/" element={<ExploreMovies/>}  />
                  <Route path="/sessoes/:idFilme" element={<SelectSession />} />
                  <Route path="/assentos/:idSessao" element={<SelectSeats infoRequest={infoRequest} setInfoRequest={setInfoRequest} />}/>
                  <Route path="/sucesso" element={<Sucess infoRequest={infoRequest} />}></Route>
              </Routes>
          </BrowserRouter>
        </>
        
    );
}


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
  }
`