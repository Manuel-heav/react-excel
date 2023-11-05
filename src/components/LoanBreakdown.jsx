import React, { useEffect, useState } from 'react'
import formatNumberWithCommas from './utils';

const LoanBreakdown = (props) => {
  const [gst, setGst] = useState([0,0]);
  const [totalCosts, setTotalCosts] = useState([0]);
  const [firstMortgageBalance, setFirstMortgageBalance] = useState(["$0"]);
  const [firstMortgageExit, setFirstMortgageExit] = useState(["$0"]);
  const [secondMortgageBalance, setSecondMortgageBalance] = useState(["$0"]);
  const [secondMortgageExit, setSecondMortgageExit] = useState(["$0"]);
  const [payoutCreditors, setPayoutCreditors] = useState(["$0"]);
  const [ancillary, setAncillary] = useState(["$0"]);
  const [lenderEstab, setLenderEstab] = useState(["$0"]);
  const [brokerageFee, setBrokerageFee] = useState(["$0"]);
  const [lenderLegalFee, setLenderLegalFee] = useState(["$0"]);
  const [prepaidInterest, setPrepaidInterest] = useState(["$0"]);
  const [borrowerCash, setBorrowerCash] = useState(["$0"]);
  const [contractPrice, setContractPrice] = useState("$1,000,000");
  const [stampDuty, setStampDuty] = useState("$0");
  const [depositPaid, setDepositPaid] = useState("$0");


  const [costsAndUses, setCostsAndUses] = useState([0,0,0,0,0,0,0,0,0,0,0,0])

  useEffect(() => {
    if (props.onData) {
      props.onData({
        gst,
        totalCosts,
        firstMortgageBalance,
        firstMortgageExit,
        secondMortgageBalance,
        secondMortgageExit,
        payoutCreditors,
        ancillary,
        lenderEstab,
        brokerageFee,
        lenderLegalFee,
        prepaidInterest,
        borrowerCash,
        costsAndUses,
        contractPrice,
        stampDuty,
        depositPaid
      });
    }
  }, [gst, totalCosts, firstMortgageBalance, firstMortgageExit, secondMortgageBalance, secondMortgageExit, payoutCreditors, ancillary, lenderEstab, brokerageFee, lenderLegalFee, prepaidInterest, borrowerCash, costsAndUses]);
  const handleCostsAndUses = (index, value) => {
    const updatedCostsAndUses = [...costsAndUses];
    updatedCostsAndUses[index] = parseFloat(value) || 0;
    setCostsAndUses(updatedCostsAndUses);
  };

  const [gstPrice, SetgstPrice] = useState(0);
  const handleGstChange = (index, value) => {
    const numericValue = parseFloat(value.replace('%', '')) || 0;
    const updatedGst = [...gst];
    updatedGst[index] = numericValue;
    setGst(updatedGst);
    const calculatedGstPrice = (numericValue / 100) * 1000000; 
    SetgstPrice(calculatedGstPrice);
  };

 

  return (
    <div style={{marginBottom:"300px"}}>
      <h4>Requested Loan Breakdown</h4>
      <table className='borrower_head'>
      <thead>
            <td style={{width: "30%"}}>Sources of Money</td>
            <td></td>
            <td></td>
            <td style={{color: "#d76060", width: "20%"}}></td>
            <td></td>
          </thead>
          <tbody className='borrower_body'>
          <tr>
              <td>
                <input className='notBold' type="text" placeholder='First Mortgage Loan Advance' disabled/>
              </td>
              <td>

              </td>
              <td>
               
              </td>

              <td>
              <input type="text" placeholder='Positive' className='redify'/>
              </td>
              <td>
              <input 
                  type="text" 
                  placeholder='$0'
                  value={firstMortgageBalance} 
                  onChange={e => setFirstMortgageBalance(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Vendor/Second Mortgage Loan Advance' disabled/>
              </td>
              <td>

              </td>
              <td>
                
              </td>

              <td>
              <input type="text" placeholder='Positive' className='redify'/>
              </td>
              <td>
              <input 
                  type="text" 
                  placeholder='$0' 
                  value={secondMortgageBalance} 
                  onChange={e => setSecondMortgageBalance(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Borrower Cash Contribution' disabled/>
              </td>
              <td>

              </td>
              <td style={{display: "flex"}}>
                <input style={{width: "37%"}}type="text" placeholder='If Net Cashflow 'className='redify yelloify'/>
                <input type="text" placeholder='is < 0, type the number here' className='redify'/>
              </td>

              <td>
              <input type="text" placeholder='Positive' className='redify'/>
              </td>
              <td>
                <input type="text" placeholder='$0' disabled className='yelloify'/>
              </td>
            </tr>

            <tr style={{borderTop: '1px solid black'}}>
              <td>
                <input type="text" placeholder='Total Sources' disabled className="bolder"/>
              </td>
              <td>

              </td>
              <td>
                
              </td>

              <td>
              <input type="text" placeholder='Positive' className='redify'/>
              </td>
              <td>
                <input className="bolder" type="text" placeholder='$1,202,500' disabled/>
              </td>
            </tr>
          </tbody>
        </table>


        <table className='borrower_head' style={{marginTop: "20px"}}>
      <thead>
            <td style={{width: "30%"}}>Costs/Uses of Money</td>
            <td></td>
            <td></td>
            <td style={{color: "#d76060", width: "8%"}}></td>
            <td></td>
          </thead>
          <tbody className='borrower_body'>
          <tr>
              <td>
                <input className='highlight' type="text" placeholder='Purchase Costs' disabled/>
              </td>
              <td>

              </td>
              <td>
               
              </td>

              <td>
              
              </td>
              <td>
                
              </td>
            </tr>
            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Contract Price' disabled/>
              </td>
              <td>

              </td>
              <td>
                
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input 
                  className='bolderr'
                  style={{color: "red"}}
                  type="text" 
                  placeholder='$0' 
                  value={contractPrice} 
                  onChange={e => setContractPrice(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='GST' disabled/>
              </td>
              <td>
              <input
                type="text"
                placeholder="12.00%"
                value={gst[0] === 0 ? '' : `${gst[0]}%`}
                onChange={(e) => handleGstChange(0,e.target.value)}
              />
              </td>
                <td>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input onChange={e => setGst(e.target.value)} type="text" placeholder="120,000" style={{color: "#d76060"}} value={`($${formatNumberWithCommas(gstPrice.toFixed(2))})`} className='redify' />
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Stamp Duty' disabled/>
              </td>
              <td>
              <select style={{width: "47%", border: "none", outline: "none", color: "#6b79ff", fontSize: "11px"}}>
                  <option value="SA" disabled selected>SA</option>
                  <option value="State">State</option>
                  <option value="NSW">NSW</option>
                  <option value="VIC">VIC</option>
                  <option value="QLD">QLD</option>
                  <option value="WA">WA</option>
                  <option value="TAS">TAS</option>
                  <option value="ACT">ACT</option>
                  <option value="NT">NT</option>
                </select>
              </td>
                <td style={{width: "3%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
                <input 
                  className='greenify'
                  style={{color: "green"}}
                  type="text" 
                  placeholder='$0' 
                  value={stampDuty} 
                  onChange={e => setStampDuty(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Deposit Paid' disabled/>
              </td>
              <td>
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Positive' className='redify highlight'/>
              </td>
              <td>
              <input 
                  style={{color: "red"}}
                  type="text" 
                  placeholder='$0' 
                  value={depositPaid} 
                  onChange={e => setDepositPaid(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input className='highlight' type="text" placeholder='Refinance Costs' disabled/>
              </td>
              <td>
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              </td>
              <td>
              </td>
            </tr>



            <tr>
              <td>
                <input className='notBold' type="text" placeholder='First Mortgage Balance' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Name' />
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$1,850,000' value={costsAndUses[0] === 0 ? '' : `$${costsAndUses[0]}`} onChange={(e) => handleCostsAndUses(0, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='First Mortgage Exit/Legal Fees' disabled/>
              </td>
              <td>
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={costsAndUses[4] === 0 ? '' : `$${costsAndUses[4]}`} onChange={(e) => handleCostsAndUses(4, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Second Mortgage Balance' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Name' />
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={costsAndUses[1] === 0 ? '' : `$${costsAndUses[1]}`} onChange={(e) => handleCostsAndUses(1, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Second Mortgage Exit/Legal Fees' disabled/>
              </td>
              <td>
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={costsAndUses[5] === 0 ? '' : `$${costsAndUses[5]}`} onChange={(e) => handleCostsAndUses(5, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Payout other credior/s' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Creditor Name/s' />
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={costsAndUses[2] === 0 ? '' : `$${costsAndUses[2]}`} onChange={(e) => handleCostsAndUses(2, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='highlight' type="text" placeholder='Other Settlement Costs' disabled/>
              </td>
              <td>
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Ancillary (overdue rates, water, land tax)' disabled/>
              </td>
              <td>
              
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={costsAndUses[3] === 0 ? '' : `$${costsAndUses[3]}`} onChange={(e) => handleCostsAndUses(3, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Lender Estab Fee (inc GST)' disabled/>
              </td>
              <td>
                <input type="text" placeholder='12.00%' />
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" className='bolderr' placeholder='$144,300'  value={costsAndUses[6] === 0 ? '' : `$${costsAndUses[6]}`} onChange={(e) => handleCostsAndUses(6, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Brokerage Fee (inc GST)' disabled/>
              </td>
              <td>
                <input type="text" placeholder='0.00%' />
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
                <input type="text" placeholder='$0' disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Lender Legal Fee' disabled/>
              </td>
              <td>
                
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
                <input type="text" placeholder='$0' disabled/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Label if req.' />
              </td>
              <td>
                
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={costsAndUses[7] === 0 ? '' : `$${costsAndUses[7]}`} onChange={(e) => handleCostsAndUses(7, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Label if req.' />
              </td>
              <td>
                
              </td>
                <td style={{width: "35%"}}>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input type="text" placeholder='$0'  value={costsAndUses[8] === 0 ? '' : `$${costsAndUses[8]}`} onChange={(e) => handleCostsAndUses(8, e.target.value.replace(/\$/g, ''))}/>
              </td>
            </tr>

            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Prepaid Interest (Est)             Term(m)' disabled/>
              </td>

              <td>
                <input type="text" placeholder='0' />
              </td>

                <td style={{display: "flex"}}>
               <span style={{fontWeight: "300"}}>Rate(pa)  </span>
               <input type="text"placeholder='  0.00%' />
                </td>
                
                <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
                <input type="text" placeholder='$0' disabled/>
              </td>       
            </tr>


            <tr>
              <td>
                <input className='notBold' type="text" placeholder='Borrower Cash Distribution' disabled/>
              </td>
              <td>

              </td>
              <td style={{display: "flex"}}>
                <input style={{width: "37%"}}type="text" placeholder='If Net Cashflow 'className='redify yelloify'/>
                <input type="text" placeholder='is < 0, type the number here' className='redify'/>
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
                <input type="text" placeholder='($43,520)'className='redify yelloify' />
              </td>
            </tr>


            <tr style={{borderTop: '1px solid black'}}>
              <td>
                <input className="bolder" type="text" placeholder='Total Costs/Uses' disabled/>
              </td>
              <td>

              </td>
              <td>
                
              </td>

              <td>
              <input type="text" placeholder='Negative' className='redify'/>
              </td>
              <td>
              <input style={{color: "#d76060"}} type="text" placeholder={`$${formatNumberWithCommas(130782 + costsAndUses.reduce((acc, val) => acc + val, 0).toFixed(2))}`} disabled className='bolderr'/>
              </td>
            </tr>
            <br />
            <tr style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>
              <td>
                <input className='bolder' type="text" placeholder='Balance (Sources minus Uses, should be $0)' disabled/>
              </td>
              <td>

              </td>
              <td>
                <input type="text" placeholder='Error' className='redify yelloify'/>
              </td>
              <td>
              <input type="text" placeholder='Positive' className='redify'/>
              </td>
              <td>
              <input style={{color: "#d76060"}}  type="text" placeholder={`$${formatNumberWithCommas(10532 + costsAndUses.reduce((acc, val) => acc + val, 0).toFixed(2))}`} disabled className='bolderr'/>
              </td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}

export default LoanBreakdown