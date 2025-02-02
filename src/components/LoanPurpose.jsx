import { useState } from "react";

export const LoanPurpose = () => {
  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");

  const workingCapitalPurposes = [
    "New Business",
    "Enhancement of Existing Business",
    "New Geography Expansion",
    "Others",
  ];

  const termLoanPurposes = [
    "New Project",
    "Capacity Enhancement",
    "Purchase of Building",
    "Purchase of Plant & Machinery (P&M)",
    "Purchase of Business",
    "Others",
  ];

  return (
    <>
      <div className="row">
        <div className="input2">
          <div className="title5">Type of Loan</div>
          <select
            className="textfield"
            onChange={(e) => setLoanType(e.target.value)}
            value={loanType}
          >
            <option value="">Select Loan Type</option>
            <option value="workingCapital">Working Capital Loan</option>
            <option value="termLoan">Term Loan</option>
          </select>
        </div>
      </div>
      {loanType && (
        <div className="row">
          <div className="input2">
            <div className="title5">
              {loanType === "workingCapital"
                ? "Working Capital Loan:"
                : "Term Loan:"}
            </div>
            <input
              className="textfield2"
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
      )}
      {loanType && (
        <div className="row">
          <div className="input2">
            <div className="title5">Purpose</div>
            <select
              className="textfield"
              onChange={(e) => setPurpose(e.target.value)}
              value={purpose}
            >
              <option value="">Select Purpose</option>
              {(loanType === "workingCapital"
                ? workingCapitalPurposes
                : termLoanPurposes
              ).map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {purpose === "Others" && (
              <input
                className="textfield2"
                type="text"
                placeholder="Enter Purpose"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
