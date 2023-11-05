import { useState } from 'react'
import './App.css'
import LoanSubmission from './LoanSubmission';

function App() {

  const handleData = (data) => {
    console.log('App data:', data);
  };
  return (
    <>
     <LoanSubmission onData={handleData}/>
    </>
  )
}

export default App
