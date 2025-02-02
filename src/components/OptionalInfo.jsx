import { useState } from "react";

export const OptionalInformation = () => {
  const [lenderName, setLenderName] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [repaymentStatus, setRepaymentStatus] = useState("");
  const [comments, setComments] = useState("");

  const repaymentOptions = ["On Time", "Delayed", "Default"];

  return (
    <>
      <div className="title5">Current Lender Details (If applicable)</div>
      <div className="row">
        <div className="input2">
          <input
            className="textfield"
            type="text"
            placeholder="Lender Name"
            value={lenderName}
            onChange={(e) => setLenderName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input2">
          <input
            className="textfield"
            type="text"
            placeholder="Outstanding Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input2">
          <select
            className="textfield"
            onChange={(e) => setRepaymentStatus(e.target.value)}
            value={repaymentStatus}
          >
            <option value="">Select Repayment Status</option>
            {repaymentOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input2">
          <textarea
            className="textfield"
            placeholder="Additional Notes/Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
