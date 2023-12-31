import React, { useEffect, useState } from 'react'

const Assets = (props) => {
  const [currentValues, setCurrentValues] = useState([0,0,0,0,0,0,0,0,0,0,0]);
  const [currentLoan, setCurrentLoan] = useState([0,0,0,0,0,0,0,0,0,0,0]);

  const handleCurrentValuesChange = (index, value) => {
    const updatedCurrentValue = [...currentValues];
    updatedCurrentValue[index] = parseFloat(value) || 0;
    setCurrentValues(updatedCurrentValue);
  };

  const handleCurrentLoanChange = (index, value) => {
    const updatedCurrentLoan = [...currentLoan];
    updatedCurrentLoan[index] = parseFloat(value) || 0;
    setCurrentLoan(updatedCurrentLoan);
  };
  useEffect(() => {
    if (props.onData) {
      props.onData({
        currentValues,
        currentLoan,
        EquityValue,
        LVRValue: LVRValue(),
      });
    }
  }, [currentValues, currentLoan]);

  const EquityValue = 
  (currentValues[0] - currentLoan[0]) + 
  (currentValues[1] - currentLoan[1]) +
  (currentValues[2] - currentLoan[2]) +
  (currentValues[3] - currentLoan[3]) +
  (currentValues[4] - currentLoan[4]) +
  (currentValues[5] - currentLoan[5]) +
  (currentValues[6] - currentLoan[6]) +
  (currentValues[7] - currentLoan[7]) +
  (currentValues[8] - currentLoan[8]) +
  (currentValues[9] - currentLoan[9]) +
  (currentValues[10] - currentLoan[10]) 

  const LVRValue = () => {
    let total = 0;
  
    for (let i = 0; i <= 10; i++) {
      if (currentLoan[i] !== 0) {
        total += currentValues[i] / currentLoan[i];
      }
    }
    if (isNaN(total)) {
      return 0;
    } else {
      return total.toFixed(2);
    }
  }
  return (
    <div>
      <h4>Assets & Liabilities</h4>
      <table className='borrower_head'>
          <thead>
            <td>Street address (or Suburb)</td>
            <td>Current value</td>
            <td>Current Loan</td>
            <td>Equity</td>
            <td>LVR</td>
          </thead>

          <tbody className='borrower_body'>
          <tr>
              <td style={{width: "30%"}}>
                <input type="text" placeholder='Property 1' />
              </td>
              <td>
                 <input type="text" placeholder='$100'  value={currentValues[0] === 0 ? '' : `$${currentValues[0]}`} onChange={(e) => handleCurrentValuesChange(0, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$50'  value={currentLoan[0] === 0 ? '' : `$${currentLoan[0]}`} onChange={(e) => handleCurrentLoanChange(0, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
                <input type="text" placeholder='$50' value={`$${currentValues[0] - currentLoan[0]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[0] === 0 ? "#DIV/0!" : (currentValues[0]/currentLoan[0]).toFixed(2)}`} disabled/>
              </td>
            </tr>
            
            <tr>
              <td>
                <input type="text" placeholder='Property 2' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[1] === 0 ? '' : `$${currentValues[1]}`} onChange={(e) => handleCurrentValuesChange(1, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[1] === 0 ? '' : `$${currentLoan[1]}`} onChange={(e) => handleCurrentLoanChange(1, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[1] - currentLoan[1]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[1] === 0 ? "#DIV/0!" : (currentValues[1]/currentLoan[1]).toFixed()}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Property 3' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[2] === 0 ? '' : `$${currentValues[2]}`} onChange={(e) => handleCurrentValuesChange(2, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[2] === 0 ? '' : `$${currentLoan[2]}`} onChange={(e) => handleCurrentLoanChange(2, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[2] - currentLoan[2]}`} disabled/>
              </td>
              <td>
                <input type="text" placeholder='#DIV/0!' value={currentValues[2] === 0 ? "#DIV/0!" : (currentValues[2]/currentLoan[2]).toFixed(2)} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Property 4' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[3] === 0 ? '' : `$${currentValues[3]}`} onChange={(e) => handleCurrentValuesChange(3, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[3] === 0 ? '' : `$${currentLoan[3]}`} onChange={(e) => handleCurrentLoanChange(3, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[3] - currentLoan[3]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[3] === 0 ? "#DIV/0!" : (currentValues[3]/currentLoan[3].toFixed(2))}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Property 5' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[4] === 0 ? '' : `$${currentValues[4]}`} onChange={(e) => handleCurrentValuesChange(4, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[4] === 0 ? '' : `$${currentLoan[4]}`} onChange={(e) => handleCurrentLoanChange(4, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[4] - currentLoan[4]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[4] === 0 ? "#DIV/0!" : (currentValues[4]/currentLoan[4]).toFixed(2)}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Input' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[5] === 0 ? '' : `$${currentValues[5]}`} onChange={(e) => handleCurrentValuesChange(5, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[5] === 0 ? '' : `$${currentLoan[5]}`} onChange={(e) => handleCurrentLoanChange(5, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[5] - currentLoan[5]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[5] === 0 ? "#DIV/0!" : (currentValues[5]/currentLoan[5]).toFixed(2)}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Input' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[6] === 0 ? '' : `$${currentValues[6]}`} onChange={(e) => handleCurrentValuesChange(6, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[6] === 0 ? '' : `$${currentLoan[6]}`} onChange={(e) => handleCurrentLoanChange(6, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[6] - currentLoan[6]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[6] === 0 ? "#DIV/0!" : (currentValues[6]/currentLoan[6]).toFixed(2)}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Input' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[7] === 0 ? '' : `$${currentValues[7]}`} onChange={(e) => handleCurrentValuesChange(7, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[7] === 0 ? '' : `$${currentLoan[7]}`} onChange={(e) => handleCurrentLoanChange(7, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[7] - currentLoan[7]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[7] === 0 ? "#DIV/0!" : (currentValues[7]/currentLoan[7]).toFixed(2)}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Business Value' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[8] === 0 ? '' : `$${currentValues[8]}`} onChange={(e) => handleCurrentValuesChange(8, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[8] === 0 ? '' : `$${currentLoan[8]}`} onChange={(e) => handleCurrentLoanChange(8, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[8] - currentLoan[8]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[8] === 0 ? "#DIV/0!" : (currentValues[8]/currentLoan[8]).toFixed(2)}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Businesss Assets/Liabilities' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[9] === 0 ? '' : `$${currentValues[9]}`} onChange={(e) => handleCurrentValuesChange(9, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[9] === 0 ? '' : `$${currentLoan[9]}`} onChange={(e) => handleCurrentLoanChange(9, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[9] - currentLoan[9]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[9] === 0 ? "#DIV/0!" : (currentValues[9]/currentLoan[9]).toFixed(2)}`} disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input type="text" placeholder='Motor Vehicles' />
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentValues[10] === 0 ? '' : `$${currentValues[10]}`} onChange={(e) => handleCurrentValuesChange(10, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={currentLoan[10] === 0 ? '' : `$${currentLoan[10]}`} onChange={(e) => handleCurrentLoanChange(10, e.target.value.replace(/\$/g, ''))}/>
              </td>
              <td>
              <input type="text" placeholder='$0' value={`$${currentValues[10] - currentLoan[10]}`} disabled/>
              </td>
              <td>
              <input type="text" value={`${currentValues[10] === 0 ? "#DIV/0!" : (currentValues[10]/currentLoan[10]).toFixed(2)}`} disabled/>
              </td>
            </tr>

            <tr style={{borderTop: '1px solid black'}}>
              <td>
                <input type="text" placeholder='Totals' disabled className='bolder'/>
              </td>
              <td>
              <input type="text" placeholder={`$${currentValues.reduce((acc, val) => acc + val, 0).toFixed(2)}`} disabled className='bolder'/>
              </td>
              <td>
              <input type="text" placeholder={`$${currentLoan.reduce((acc, val) => acc + val, 0).toFixed(2)}`} disabled className='bolder'/>
              </td>
              <td>
                <input type="text" placeholder='$50' value={`$${EquityValue}`} disabled className='bolder'/>
              </td>
              <td>
                <input type="text" placeholder={`${LVRValue()}%`}  disabled className='bolder'/>
              </td>
            </tr>
            
          </tbody>
        </table>
    </div>
  )
}

export default Assets