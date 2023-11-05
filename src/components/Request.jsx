import React from 'react'
import './request.css'
const Request = () => {
  return (
    <div className='request_container'>
      <h4>Requested Loan Terms</h4>
      <table className='borrower_head'>
          <tbody className='borrower_body'>
          <tr>
              <td style={{width: "30%"}}>
                <input type="text" placeholder='Preferred Loan Term (IO)' disabled/>
              </td>
              <td>
                <input type="text" placeholder='12 months' />
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Preferred Loan Term (P&I)' disabled/>
              </td>
              <td>
                <input type="text" placeholder='0 years' />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Prepaid Interest Term' disabled/>
              </td>
              <td>
                <input type="text" placeholder="6 months" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Requested Interest Rate' disabled/>
              </td>
              <td>
                <input type="text" placeholder='############' />
              </td>
            </tr>

            

            <tr>
              <td>
                <input type="text" placeholder='Expected Proof of Income' disabled/>
              </td>
              <td>
              <select style={{width: "47%", border: "none", outline: "none", color: "#6b79ff", fontSize: "11px"}}>
                  <option value="Select" disabled selected>Select</option>
                  <option value="Self Declaration Only">Self Declaration Only</option>
                  <option value="Accountants Letter">Accountants Letter</option>
                  <option value="Lease Doc">Lease Doc</option>
                  <option value="BAS">BAS</option>
                  <option value="Full Doc">Full Doc</option>
                </select>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Preferred Settlement Date' disabled/>
              </td>
              <td>
                <input style={{width: "40%", color: "blue"}} type="date" placeholder='01-Nov-23' />
              </td>
              <td>
              </td>
            </tr>

            <tr className='redify'>
              <td>
                <input type="text" placeholder='Critical Settlement Date' disabled/>
              </td>
              <td>
                <input style={{width: "40%", color: "#d76060" }} type="date" placeholder='01-Nov-23' className='pinkify'/>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr className='redify'>
              <td>
                <input type="text" placeholder='Critical Reason' disabled/>
              </td>
              <td>
              <select style={{width: "47%", border: "none", outline: "none", color: "#d76060", fontSize: "11px"}}>
                  <option value="Current Loan Expires">Current Loan Expires</option>
                  <option value="Contract Expires">Contract Expires</option>
                  <option value="Urgent Creditor Payment">Urgent Creditor Payment</option>
                </select>
              </td>
              <td>
              
              </td>
              <td>
              </td>
            </tr>

            <tr className='redify'>
              <td>
                <input type="text" placeholder='Critical Comments' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Input' className='pinkify'/>
              </td>
              <td>
              </td>
              <td>
                <input type="text" placeholder='' className='pinkify'/>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Request