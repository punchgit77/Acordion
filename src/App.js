import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ? from './components/DataRender';
import ViewDetails from './components/ViewDetails';
import './App.css';
import DataRender from './components/DataRender';




function App() {
return(
 <div className='App'>

   <Routes>
      <Route exact path="" element={<ViewDetails />} />  
      <Route exact path="/details" element={<DataRender />} />
   </Routes>
 </div>
  )
}

export default App;
