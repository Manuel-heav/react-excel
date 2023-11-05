import React from 'react'
import Section_1 from './components/Section_1'
import Section_2 from './components/Section_2'
import Section_3 from './components/Section_3'
import './section.css'

const LoanSubmission = (props) => {
  console.log('LoanSubmission onData:', props.onData);
  return (
    <div className='section_container'>
        <Section_1 onData = {props.onData}/>
        <Section_2 onData = {props.onData}/>
        <Section_3 />
    </div>
  )
}

export default LoanSubmission