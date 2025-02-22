// import { useState } from "react";
// import './App.css';
// import { BasicDetails } from './components/BasicDetails';
// import { FinancialDetails } from './components/FinancialDetails';
// import { LoanPurpose } from './components/LoanPurpose';
// import { CollateralDetails } from './components/CollateralDetails';
// import { ContactInfo } from './components/ContactInfo';
// import { OptionalInformation } from './components/OptionalInfo';

// export const App = () => {
//   const [step, setStep] = useState(0);

//   const components = [
//     <BasicDetails />, 
//     <FinancialDetails />, 
//     <LoanPurpose />, 
//     <CollateralDetails />, 
//     <ContactInfo />, 
//     <OptionalInformation />
//   ];

//   const nextStep = () => {
//     if (step < components.length - 1) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   return (
//     <div className="App">
//       <div className={"page-1"}>
//         <div className="top-bar">
//           <div className="rectangle-4137"></div>
//           <div className="title">Business Loan Eligibility Calculator</div>
//           <div className="navigation">
//             <div className="tab">Home</div>
//             <div className="tab">About Us</div>
//             <div className="tab">Contact</div>
//           </div>
//         </div>
//         <div className="section">
//           <div className="container">
//             <div className="title2">Calculate Your Business Loan Eligibility</div>
//           </div>
//           <img className="vector-200" src="vector-2000.svg" />
//         </div>
//         <div className="form">
//           <div className="container2">
//             <div className="title4">Business Details</div>
//             <div className="description2">Please fill in the required information</div>
//           </div>
//           <div className="list">
//             {components[step]}
//             <div className="button-container">
//               {step > 0 && (
//                 <button className="primary3" onClick={prevStep}>
//                   <div className="title3">Previous</div>
//                 </button>
//               )}
//               {step < components.length - 1 && (
//                 <button className="primary3" onClick={nextStep}>
//                   <div className="title3">Next</div>
//                 </button>
//               )}
//               {step >= components.length-1  && (
//                 <button className="primary3" onClick={()=>{}}>
//                   <div className="title3">Submit</div>
//                 </button>
//               )}
//             </div>
//           </div>
//           <img className="vector-2002" src="vector-2001.svg" />
//         </div>
//         <div className="section2">
//           <div className="container3">
//             <div className="title6">© 2025 Nysh Advisory. All rights reserved.</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import './App.css';
import { BasicDetails } from './components/BasicDetails';
import { FinancialDetails } from './components/FinancialDetails';
import { LoanPurpose } from './components/LoanPurpose';
import { CollateralDetails } from './components/CollateralDetails';
import { ContactInfo } from './components/ContactInfo';
import { OptionalInformation } from './components/OptionalInfo';

export const App = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    basicDetails: {},
    financialDetails: {},
    loanPurpose: {},
    collateralDetails: {},
    contactInfo: {},
    optionalInfo: {},
  });

  const updateFormData = (section, data) => {
    setFormData(prev => ({ ...prev, [section]: data }));
  };

  const pages = [
    [
      <BasicDetails formData={formData.basicDetails} updateFormData={(data) => updateFormData('basicDetails', data)} />,
      <FinancialDetails formData={formData.financialDetails} updateFormData={(data) => updateFormData('financialDetails', data)} />,
      <LoanPurpose formData={formData.loanPurpose} updateFormData={(data) => updateFormData('loanPurpose', data)} />,
    ],
    [
      <CollateralDetails formData={formData.collateralDetails} updateFormData={(data) => updateFormData('collateralDetails', data)} />,
      <ContactInfo formData={formData.contactInfo} updateFormData={(data) => updateFormData('contactInfo', data)} />,
      <OptionalInformation formData={formData.optionalInfo} updateFormData={(data) => updateFormData('optionalInfo', data)} />,
    ],
  ];

  const nextStep = () => {
    if (step < pages.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);

    const loanType = formData.loanPurpose?.loanType;
    const loanTenure = 60; // Assuming tenure in months (5 years), adjust as needed
    const projectedAnnualEBIT = parseFloat(formData.financialDetails?.ebit?.fy2024) || 0;
    const projectedAnnualTurnover = parseFloat(formData.financialDetails?.turnover?.fy2024) || 0;

    let eligibilityMessage = "";

    if (loanType === "termLoan") {
        const tlEmi = (0.6 * projectedAnnualEBIT) / 12;
        const tlEligibility = tlEmi * loanTenure;
        eligibilityMessage = `Term Loan Eligibility: ₹${tlEligibility.toLocaleString()} (EMI: ₹${tlEmi.toLocaleString()}/month)`;
    } 
    else if (loanType === "workingCapital") {
        const wcEligibility = projectedAnnualTurnover / 4;
        eligibilityMessage = `Working Capital Eligibility: ₹${wcEligibility.toLocaleString()}`;
    } 
    else {
        eligibilityMessage = "Please select a valid loan type.";
    }

    alert(eligibilityMessage);
  };

  return (
    <div className="App">
      <div className={"page-1"}>
        <div className="top-bar">
          <div className="rectangle-4137"></div>
          <div className="title">Business Loan Eligibility Calculator</div>
          <div className="navigation">
            <div className="tab">Home</div>
            <div className="tab">About Us</div>
            <div className="tab">Contact</div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="title2">Calculate Your Business Loan Eligibility</div>
          </div>
          <img className="vector-200" src="vector-2000.svg" />
        </div>
          
      <div className="form">
        {pages[step].map((Component, index) => (
          <div key={index} className="list">{Component}</div>
        ))}

        <div className="button-container">
          {step > 0 && (
            // <button className="primary3" onClick={prevStep}>Previous</button>
            <button className="primary3" onClick={prevStep}>
            <div className="title3">Previous</div></button>
          )}
          {step < pages.length - 1 ? (
            <button className="primary3" onClick={nextStep}><div className="title3">Next</div></button>
          ) : (
            <button className="primary3" onClick={handleSubmit}><div className="title3">Submit</div></button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

