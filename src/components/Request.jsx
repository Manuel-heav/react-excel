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
                <input type="text" placeholder='Select' />
              </td>
              <td>
                <input type="text" placeholder='Select as default' className="redify"/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Preferred Settlement Date' disabled/>
              </td>
              <td>
                <input type="text" placeholder='01-Nov-23' />
              </td>
              <td>
                <input type="text" placeholder='Date box' className='redify'/>
              </td>
            </tr>

            <tr className='redify'>
              <td>
                <input type="text" placeholder='Critical Settlement Date' disabled/>
              </td>
              <td>
                <input type="text" placeholder='01-Nov-23' className='pinkify'/>
              </td>
              <td>
                <input type="text" placeholder='Date box' className='pinkify'/>
              </td>
              <td>
                <input type="text" placeholder='Keep P in' className='pinkify'/>
              </td>
            </tr>

            <tr className='redify'>
              <td>
                <input type="text" placeholder='Critical Reason' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Current loan exp' className='pinkify'/>
              </td>
              <td>
                <input type="text" placeholder='Select as default' className="redify"/>
              </td>
              <td>
                <input type="text" placeholder='Keep P in' className='pinkify'/>
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
                <input type="text" placeholder='Keep P in' className='pinkify'/>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Request