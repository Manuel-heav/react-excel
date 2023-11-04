import React from 'react'

const ExpectedIssues = () => {
  return (
    <div>
      <h4>Expected Issues to overcome</h4>
      <table className='borrower_head'>
          <tbody className='borrower_body'>
          <tr>
              <td>
                <input type="text" placeholder='Credit History' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Tick' className="redify"/>
              </td>
              <td>
                <input type="text" placeholder='Optional Comment' />
              </td>
            </tr>
            <tr>
            <td>
                <input type="text" placeholder='Loan Repayment History' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Tick' className="redify"/>
              </td>
              <td>
                <input type="text" placeholder='Optional Comment' />
              </td>
            </tr>
            <tr>
            <td>
                <input type="text" placeholder='LVR' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Tick' className="redify"/>
              </td>
              <td>
                <input type="text" placeholder='Optional Comment' />
              </td>
            </tr>

            <tr>
            <td>
                <input type="text" placeholder='Rate Expectations' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Tick' className="redify"/>
              </td>
              <td>
                <input type="text" placeholder='Optional Comment' />
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default ExpectedIssues