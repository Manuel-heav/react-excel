import React from 'react'
import Request from './Request'
import ExpectedIssues from './ExpectedIssues'
import Assets from './Assets'
import DocumentUpload from './DocumentUpload'

const Section_2 = (props) => {
  return (
    <div>
      <Request />
      <ExpectedIssues />
      <Assets onData={props.onData} />
      <DocumentUpload />
    </div>
  )
}

export default Section_2