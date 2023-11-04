import React, { useState } from 'react'
import formatNumberWithCommas from './utils';

const Security = () => {
  const [securityData, setSecurityData] = useState([
    {
      streetAddress: '',
      suburb: '',
      state: '',
      postcode: '',
      estValue: 0,
      newLVR: 0,
      newLoan: 0,
      currentLoan: 0,
      cashOut: 0,
    },
  ]);

  const [estValue, setEstValue]= useState([0,0,0,0,0]);
  const [newLVR, setNewLVR] = useState([0,0,0,0,0]);
  const [newLoan, setNewLoan] = useState([0,0,0,0,0]);
  const [currentLoan, setCurrentLoan] = useState([0,0,0,0,0]);
  const [cashOut, setCashOut] = useState([0,0,0,0,0]);

  const handleEstValueChange = (index, value) => {
    const updatedEstValue = [...estValue];
    updatedEstValue[index] = parseFloat(value) || 0;
    setEstValue(updatedEstValue);
  };

  const handleNewLVRChange = (index, value) => {
    const numericValue = parseFloat(value.replace('%', '')) || 0;
    const updatedNewLVR = [...newLVR];
    updatedNewLVR[index] = numericValue;
    setNewLVR(updatedNewLVR);
  };

  const handleCurrentLoan= (index, value) => {
    const updatedCurrentLoan = [...currentLoan];
    updatedCurrentLoan[index] = parseFloat(value) || 0;
    setCurrentLoan(updatedCurrentLoan);
  };

  return (
    <div>
      <h4>Security (property/ies offered for security)</h4>
        <table className='borrower_head'>
          <thead>
            <td style={{width: "15%"}}>Street Address</td>
            <td>Suburb</td>
            <td>State</td>
            <td>Postcode</td>
            <td>Est Value</td>
            <td className='smaller'>New LVR</td>
            <td className='smaller'>New Loan</td>
            <td className='smaller'>Current Loan</td>
            <td className='smaller'>Cash Out</td>
          </thead>

          <tbody className='borrower_body'>
          <tr>
              <td>
                <input type="text" placeholder='185 Stirling Street' />
              </td>
              <td>
                <input type="text" placeholder='Perth' />
              </td>
              <td>
                <input type="text" placeholder='State' />
              </td>
              <td>
                <input type="text" placeholder='8000' />
              </td>
              <td>
                <input type="text" placeholder='$1,850,000'  value={estValue[0] === 0 ? '' : `$${estValue[0]}`} onChange={(e) => handleEstValueChange(0, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input
                    type="text"
                    placeholder="65.00%"
                    value={newLVR[0] === 0 ? '' : `${newLVR[0]}%`}
                    onChange={(e) => handleNewLVRChange(0, e.target.value)}
                />
              </td>
              <td>
                <input type="text" placeholder='$1,202,500'  value={`$${newLoan[0]}.`} onChange={(e) => {setNewLoan(e.target.value) }} disabled/>
              </td>
              <td>
                <input type="text" placeholder='$500,000'  value={currentLoan[0] === 0 ? '' : `$${currentLoan[0]}`} onChange={(e) => handleCurrentLoan(0, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
                <input type="text" placeholder='$702,500' value={`$${cashOut[0]}.`} onChange={(e) => {setCashOut(e.target.value) }} disabled/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Property 2' />
              </td>
              <td>
                <input type="text" placeholder='Suburb' />
              </td>
              <td>
                <input type="text" placeholder='State' />
              </td>
              <td>
                <input type="text" placeholder='Postcode' />
              </td>
              <td>
                <input type="text" placeholder='$0'  value={estValue[1] === 0 ? '' : `$${estValue[1]}`} onChange={(e) => handleEstValueChange(1, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input
                    type="text"
                    placeholder="0.00%"
                    value={newLVR[1] === 0 ? '' : `${newLVR[1]}%`}
                    onChange={(e) => handleNewLVRChange(1, e.target.value)}
                />
              </td>
              <td>
                <input type="text" placeholder='$1,202,500'  value={`$${newLoan[1]}.`} onChange={(e) => {setNewLoan(e.target.value) }} disabled/>
              </td>
              <td>
                <input type="text" placeholder='$0'  value={currentLoan[1] === 0 ? '' : `$${currentLoan[1]}`} onChange={(e) => handleCurrentLoan(1, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
                <input type="text" placeholder='$702,500' value={`$${cashOut[1]}.`} onChange={(e) => {setCashOut(e.target.value) }} disabled/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Property 3' />
              </td>
              <td>
                <input type="text" placeholder='Suburb' />
              </td>
              <td>
                <input type="text" placeholder='State' />
              </td>
              <td>
                <input type="text" placeholder='Postcode' />
              </td>
              <td>
                <input type="text" placeholder='$0'  value={estValue[2] === 0 ? '' : `$${estValue[2]}`} onChange={(e) => handleEstValueChange(2, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input
                    type="text"
                    placeholder="0.00%"
                    value={newLVR[2] === 0 ? '' : `${newLVR[2]}%`}
                    onChange={(e) => handleNewLVRChange(2, e.target.value)}
                />
              </td>
              <td>
                <input type="text" placeholder='$1,202,500'  value={`$${newLoan[2]}.`} onChange={(e) => {setNewLoan(e.target.value) }} disabled/>
              </td>
              <td>
                <input type="text" placeholder='$0'  value={currentLoan[2] === 0 ? '' : `$${currentLoan[2]}`} onChange={(e) => handleCurrentLoan(2, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
                <input type="text" placeholder='$702,500' value={`$${cashOut[2]}.`} onChange={(e) => {setCashOut(e.target.value) }} disabled/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Property 4' />
              </td>
              <td>
                <input type="text" placeholder='Suburb' />
              </td>
              <td>
                <input type="text" placeholder='State' />
              </td>
              <td>
                <input type="text" placeholder='Postcode' />
              </td>
              <td>
                <input type="text" placeholder='$0'  value={estValue[3] === 0 ? '' : `$${estValue[3]}`} onChange={(e) => handleEstValueChange(3, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input
                    type="text"
                    placeholder="0.00%"
                    value={newLVR[3] === 0 ? '' : `${newLVR[3]}%`}
                    onChange={(e) => handleNewLVRChange(3, e.target.value)}
                />
              </td>
              <td>
                <input type="text" placeholder='$1,202,500'  value={`$${newLoan[3]}.`} onChange={(e) => {setNewLoan(e.target.value) }} disabled/>
              </td>
              <td>
                <input type="text" placeholder='$0'  value={currentLoan[3] === 0 ? '' : `$${currentLoan[3]}`} onChange={(e) => handleCurrentLoan(3, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
                <input type="text" placeholder='$702,500' value={`$${cashOut[3]}.`} onChange={(e) => {setCashOut(e.target.value) }} disabled/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder='Property 5' />
              </td>
              <td>
                <input type="text" placeholder='Suburb' />
              </td>
              <td>
                <input type="text" placeholder='State' />
              </td>
              <td>
                <input type="text" placeholder='Postcode' />
              </td>
              <td>
                <input type="text" placeholder='$0'  value={estValue[4] === 0 ? '' : `$${estValue[4]}`} onChange={(e) => handleEstValueChange(4, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input
                    type="text"
                    placeholder="0.00%"
                    value={newLVR[4] === 0 ? '' : `${newLVR[4]}%`}
                    onChange={(e) => handleNewLVRChange(4, e.target.value)}
                />
              </td>
              <td>
                <input type="text" placeholder='$1,202,500'  value={`$${newLoan[4]}.`} onChange={(e) => {setNewLoan(e.target.value) }} disabled/>
              </td>
              <td>
                <input type="text" placeholder='$0'  value={currentLoan[4] === 0 ? '' : `$${currentLoan[4]}`} onChange={(e) => handleCurrentLoan(4, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
                <input type="text" placeholder='$702,500' value={`$${cashOut[4]}.`} onChange={(e) => {setCashOut(e.target.value) }} disabled/>
              </td>
            </tr>
            {/* Final */}
            <tr style={{borderTop: '1px solid black'}}>
              <td>
                <input type="text" placeholder='Totals' disabled className='bolder'/>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
                <input type="text" placeholder={`$${formatNumberWithCommas(estValue.reduce((acc, val) => acc + val, 0).toFixed(2))}`} disabled className='bolder'/>
              </td>
              <td>
              <input
                    type="text"
                    placeholder={`${newLVR.reduce((acc, val) => acc + val, 0).toFixed(2)}%`}
                    disabled
                    className='bolder'
                  />
              </td>
              <td>
                <input type="text" placeholder='$1,202,500' disabled className='bolder'/>
              </td>
              <td>
              <input type="text" placeholder={`$${formatNumberWithCommas(currentLoan.reduce((acc, val) => acc + val, 0).toFixed(2))}`} disabled className='bolder'/>
              </td>
              <td>
                <input type="text" placeholder='$702,500' disabled className='bolder'/>
              </td>
            </tr>
          </tbody>
        </table>
            
    </div>
  )
}

export default Security