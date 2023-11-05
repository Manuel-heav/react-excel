import React, { useState, useEffect } from 'react';

const Borrower = (props) => {
  const [brokerContact, setBrokerContact] = useState('');
  const [borrower, setBorrower] = useState('');
  const [guarantor, setGuarantor] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (props.onData) {
      console.log('Borrower data:', { brokerContact, borrower, guarantor, tel, email });
      props.onData({
        brokerContact,
        borrower,
        guarantor,
        tel,
        email,
      });
    }
  }, [brokerContact, borrower, guarantor, tel, email]);

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
              <input 
                  type="text" 
                  placeholder='Name' 
                  value={brokerContact} 
                  onChange={e => setBrokerContact(e.target.value)}
                />
              </td>
              <td>
              <input 
                  type="text" 
                  placeholder='Name' 
                  value={borrower} 
                  onChange={e => setBorrower(e.target.value)}
                />
              </td>
              <td>
              <input 
                  type="text" 
                  placeholder='Name' 
                  value={guarantor} 
                  onChange={e => setGuarantor(e.target.value)}
                />
              </td>
              <td>
              <input 
                  type="text" 
                  placeholder='Name' 
                  value={tel} 
                  onChange={e => setTel(e.target.value)}
                />
              </td>
              <td>
              <input 
                  type="text" 
                  placeholder='Name' 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
              <input 
                  type="text" 
                  placeholder='Name' 
                  value={brokerContact} 
                  onChange={e => setBrokerContact(e.target.value)}
                />
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