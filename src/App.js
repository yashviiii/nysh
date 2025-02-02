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

  const components = [
    <BasicDetails />, 
    <FinancialDetails />, 
    <LoanPurpose />, 
    <CollateralDetails />, 
    <ContactInfo />, 
    <OptionalInformation />
  ];

  const nextStep = () => {
    if (step < components.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
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
          <div className="container2">
            <div className="title4">Business Details</div>
            <div className="description2">Please fill in the required information</div>
          </div>
          <div className="list">
            {components[step]}
            <div className="button-container">
              {step > 0 && (
                <button className="primary3" onClick={prevStep}>
                  <div className="title3">Previous</div>
                </button>
              )}
              {step < components.length - 1 && (
                <button className="primary3" onClick={nextStep}>
                  <div className="title3">Next</div>
                </button>
              )}
              {step >= components.length-1  && (
                <button className="primary3" onClick={()=>{}}>
                  <div className="title3">Submit</div>
                </button>
              )}
            </div>
          </div>
          <img className="vector-2002" src="vector-2001.svg" />
        </div>
        <div className="section2">
          <div className="container3">
            <div className="title6">© 2025 Nysh Advisory. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
