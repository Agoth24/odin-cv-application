// import { useState } from 'react'
import "./App.css";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Header from "./components/Header";
import PracticalExp from "./components/PracticalExp";

function App() {
  return (
    <>
      <Header />
      <main>
      <GeneralInfo />
      <Education />
      <PracticalExp />
      </main>
    </>
  );
}

export default App;
