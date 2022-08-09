import React from 'react';
import {Route,Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Header from './components/Header';
import {CreateContainer,MainContainer} from "./components";
import './App.css';

function App() {
  return (
    <AnimatePresence> 
    <div className="App w-screen h-auto  flex flex-col bg-primary">
      <Header />
      
<main className='mt-24 p-8 w-full'>
    <Routes>
      <Route path="/*" element={<MainContainer />} />
      <Route path="/createItem" element={<CreateContainer />} />

    </Routes>
  
  
  
  </main>

    </div>
    </AnimatePresence>
  );
}

export default App;
