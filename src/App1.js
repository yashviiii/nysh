import logo from './logo.svg';
import './App.css';
import { BasicDetails } from './components/BasicDetails';
import { FinancialDetails } from './components/FinancialDetails';
import { LoanPurpose } from './components/LoanPurpose';
import { CollateralDetails } from './components/CollateralDetails';
import { ContactInfo } from './components/ContactInfo';
import { OptionalInformation } from './components/OptionalInfo';

export const App = () => {
  return (
    <div className="App">
      <div className={"page-1"}>
        <div className="top-bar">
          <div className="rectangle-4137"></div>
          <div className="title">Business Loan Eligibility Calculator </div>
          <div className="navigation">
            <div className="tab">Home </div>
            <div className="tab">About Us </div>
            <div className="tab">Contact </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="title2">
              Calculate Your Business Loan Eligibility{" "}
            </div>
          </div>
          <img className="vector-200" src="vector-2000.svg" />
        </div>
        <div className="form">
          <div className="container2">
            <div className="title4">Business Details </div>
            <div className="description2">
              Please fill in the required information{" "}
            </div>
          </div>
          <div className="list">
            {/* <BasicDetails/> */}
            {/* <FinancialDetails/> */}
            {/* <LoanPurpose/> */}
            {/* <CollateralDetails/> */}
            {/* <ContactInfo/> */}
            {/* <OptionalInformation/> */}

            <div className="button">
              <div className="primary2">
                <div className="title3">Next </div>
              </div>
            </div>
          </div>
          <img className="vector-2002" src="vector-2001.svg" />
        </div>
        <div className="section2">
          <div className="container3">
            <div className="title6">
              © 2025 Nysh Advisory. All rights reserved.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// import { useState } from "react";

// const businessFields = [
//   ["Business Name", "Owner Name", "Email", "Phone Number"],
//   ["Address", "City", "State", "Zip Code"],
//   ["Business Type", "Number of Employees", "Year Established", "Website"],
//   ["Revenue", "Industry", "Social Media", "Notes"]
// ];

// const BusinessInfoForm = () => {
//   const [page, setPage] = useState(0);

//   const nextPage = () => {
//     if (page < businessFields.length - 1) setPage(page + 1);
//   };

//   const prevPage = () => {
//     if (page > 0) setPage(page - 1);
//   };

//   return (
//     <div className="w-full max-w-md p-4 border rounded-lg shadow-lg">
//       <div className="space-y-4">
//         {businessFields[page].map((label, index) => (
//           <input
//             key={index}
//             placeholder={label}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         ))}
//       </div>
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={prevPage}
//           disabled={page === 0}
//           className="px-4 py-2 text-white bg-gray-500 rounded-lg disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={page === businessFields.length - 1}
//           className="px-4 py-2 text-white bg-blue-600 rounded-lg disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BusinessInfoForm;
