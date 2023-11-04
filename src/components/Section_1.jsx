import React from 'react'
import './section1.css'
import Borrower from './borrower'
import Security from './Security'
import Request from './Request'
import LoanBreakdown from './LoanBreakdown'
const Section_1 = () => {
  return (
    <div>
      <Borrower />
      <Security />
      <LoanBreakdown />
    </div>
  )
}

export default Section_1