// import { useState } from 'react'
import "./App.css";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <main>
      <GeneralInfo />
      <Education />
      </main>
    </>
  );
}

export default App;
