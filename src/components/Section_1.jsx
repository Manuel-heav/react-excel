import React from 'react'
import './section1.css'
import Borrower from './borrower'
import Security from './Security'
import Request from './Request'
import LoanBreakdown from './LoanBreakdown'
const Section_1 = (props) => {
  // console.log('Section_1 onData:', props.onData);
  return (
    <div>
      <Borrower onData={props.onData}/>
      <Security onData={props.onData}/>
      <LoanBreakdown />
    </div>
  )
}

export default Section_1