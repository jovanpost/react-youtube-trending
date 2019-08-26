import React from 'react';
import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer'
import SelectCountry from "./components/logic/SelectCountry"


function App() {
  return (
    <div id="mainContainer">
    <Header />
    <SelectCountry />
    <Footer />
    </div>
  );
}

export default App;
