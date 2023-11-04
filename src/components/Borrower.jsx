import React from 'react'

const Borrower = () => {
  return (
    <div className="borrower">
        <h4>Borrower Details</h4>
        <table className='borrower_head'>
          <thead>
            <td>Broker Contact</td>
            <td>Borrower</td>
            <td>Guarantor</td>
            <td>Tel (if applic)</td>
            <td>Email (if applic)</td>
          </thead>

          <tbody className='borrower_body'>
          <tr>
              <td>
                <input type="text" placeholder='Name' />
              </td>
              <td>
                <input type="text" placeholder='Person/Company Name' />
              </td>
              <td>
                <input type="text" placeholder='Person/Company Name' />
              </td>
              <td>
                <input type="text" placeholder='Tel' />
              </td>
              <td>
                <input type="text" placeholder='Email' />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Tel' />
              </td>
              <td>
                <input type="text" placeholder='Person/Company Name' />
              </td>
              <td>
                <input type="text" placeholder='Person/Company Name' />
              </td>
              <td>
                <input type="text" placeholder='Tel' />
              </td>
              <td>
                <input type="text" placeholder='Email' />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Email' />
              </td>
              <td>
                <input type="text" placeholder='Person/Company Name' />
              </td>
              <td>
                <input type="text" placeholder='Person/Company Name' />
              </td>
              <td>
                <input type="text" placeholder='Tel' />
              </td>
              <td>
                <input type="text" placeholder='Email' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Borrower