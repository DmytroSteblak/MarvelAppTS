import React from 'react';
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";

function App(): JSX.Element {
  return (
      <div className='app'>
          <Header />
          <div className="main">
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='comics' element={<div>comics</div>} />
              </Routes>
          </div>
      </div>
  );
}

export default App;
