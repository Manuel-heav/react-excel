export const allData = [
  (borrowerData = {
    borrowers: [
      {
        brokerContact: {
          name: "",
          tel: "",
          email: "",
        },
        borrower: {
          name: "",
          tel: "",
          email: "",
        },
        guarantor: {
          name: "",
          tel: "",
          email: "",
        },
      },
    ],
  }),
  (securityData = {
    properties: securityData.map((property, index) => ({
      streetAddress: property.streetAddress,
      suburb: property.suburb,
      state: property.state,
      postcode: property.postcode,
      estValue: estValue[index],
      newLVR: newLVR[index],
      newLoan: newLoan[index],
      currentLoan: currentLoan[index],
      cashOut: cashOut[index],
    })),
    totals: {
      estValueTotal: estValue.reduce((acc, value) => acc + value, 0).toFixed(2),
      newLVRTotal:
        newLVR.reduce((acc, value) => acc + value, 0).toFixed(2) + "%",
      currentLoanTotal: currentLoan
        .reduce((acc, value) => acc + value, 0)
        .toFixed(2),
    },
  }),
  (loanBreakdownData = {
    sourcesOfMoney: [
      {
        label: "First Mortgage Loan Advance",
        positiveNegative: "Positive",
        amount: "$1,202,500",
      },
      {
        label: "Vendor/Second Mortgage Loan Advance",
        positiveNegative: "Positive",
        amount: "$0",
      },
      {
        label: "Borrower Cash Contribution",
        positiveNegative: "Positive",
        amount: "$0",
      },
    ],
    totalSources: "$1,202,500",
    costsAndUses: [
      {
        label: "Contract Price",
        positiveNegative: "Negative",
        amount: "($1,000,000)",
      },
      {
        label: "GST",
        positiveNegative: "Negative",
        amount: "($120,000)",
      },
      {
        label: "Stamp Duty",
        positiveNegative: "Positive",
        amount: "$0",
      },
      {
        label: "Deposit Paid",
        positiveNegative: "Positive",
        amount: "$0",
      },
      {
        label: "First Mortgage Balance",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "First Mortgage Exit/Legal Fees",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Second Mortgage Balance",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Second Mortgage Exit/Legal Fees",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Payout other creditor/s",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Ancillary (overdue rates, water, land tax)",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Lender Estab Fee (inc GST)",
        positiveNegative: "Negative",
        amount: "$144,300",
      },
      {
        label: "Brokerage Fee (inc GST)",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Lender Legal Fee",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Label if req.",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Label if req.",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Prepaid Interest (Est) Term(m)",
        positiveNegative: "Negative",
        amount: "$0",
      },
      {
        label: "Borrower Cash Distribution",
        positiveNegative: "Negative",
        amount: "($43,520)",
      },
    ],
    totalCostsUses: "$130,782",
    balance: "$10,532",
  }),
  (requestLoanData = {
    preferredLoanTermIO: "",
    preferredLoanTermPI: "",
    prepaidInterestTerm: "",
    requestedInterestRate: "",
    expectedProofOfIncome: "",
    preferredSettlementDate: "",
    criticalSettlementDate: "",
    criticalReason: "",
    criticalComments: "",
  }),
  (expectedIssuesData = {
    creditHistory: "",
    loanRepaymentHistory: "",
    lvr: "",
    rateExpectations: "",
  }),
  (assetsData = {
    property1: {
      currentLoan: currentLoan[0],
      currentValue: currentValues[0],
      equity: "",
      lvr: "",
    },
    property2: {
      currentLoan: currentLoan[1],
      currentValue: currentValues[1],
      equity: "",
      lvr: "",
    },
    property3: {
      currentLoan: currentLoan[2],
      currentValue: currentValues[2],
      equity: "",
      lvr: "",
    },
    property4: {
      currentLoan: currentLoan[3],
      currentValue: currentValues[3],
      equity: "",
      lvr: "",
    },
    property5: {
      currentLoan: currentLoan[4],
      currentValue: currentValues[4],
      equity: "",
      lvr: "",
    },
    input1: {
      currentLoan: currentLoan[5],
      currentValue: currentValues[5],
      equity: "",
      lvr: "",
    },
    input2: {
      currentLoan: currentLoan[6],
      currentValue: currentValues[6],
      equity: "",
      lvr: "",
    },
    input3: {
      currentLoan: currentLoan[7],
      currentValue: currentValues[7],
      equity: "",
      lvr: "",
    },
    businessValue: {
      currentLoan: currentLoan[8],
      currentValue: currentValues[8],
      equity: "",
      lvr: "",
    },
    businessAssetsLiabilities: {
      currentLoan: currentLoan[9],
      currentValue: currentValues[9],
      equity: "",
      lvr: "",
    },
    motorVehicles: {
      currentLoan: currentLoan[10],
      currentValue: currentValues[10],
      equity: "",
      lvr: "",
    },
    totals: {
      currentValue: currentValues.reduce((acc, val) => acc + val, 0).toFixed(2),
      currentLoan: currentLoan.reduce((acc, val) => acc + val, 0).toFixed(2),
      equity: "",
      lvr: "",
    },
  }),
];
