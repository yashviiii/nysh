// export const ContactInfo = () => {
//     return(
//         <>
//         <div className="row">
//               <div className="input2">
//                 <div className="title5">Name of Applicant</div>
//                   <input className="textfield" type="text" placeholder="Enter Full Name" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="input2">
//                 <div className="title5">Designation </div>
//                 <input className="textfield" type="text" placeholder="Enter your role, e.g., Owner, Director, CFO" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="input2">
//                 <div className="title5">Email Address </div>
//                 <input className="textfield" type="text" placeholder="Enter email" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="input2">
//                 <div className="title5">Phone Number </div>
//                 <input className="textfield" type="text" placeholder="Enter mobile number" />
//               </div>
//             </div>
//         </>
//     )
// }

export const ContactInfo = ({ formData, updateFormData }) => {
  const { name = "", designation = "", email = "", phone = "" } = formData;

  return (
    <>
      <div className="row">
        <div className="input2">
          <div className="title5">Name of Applicant</div>
          <input
            className="textfield"
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => updateFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">Designation</div>
          <input
            className="textfield"
            type="text"
            placeholder="Enter your role, e.g., Owner, Director, CFO"
            value={designation}
            onChange={(e) => updateFormData({ ...formData, designation: e.target.value })}
          />
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">Email Address</div>
          <input
            className="textfield"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => updateFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">Phone Number</div>
          <input
            className="textfield"
            type="tel"
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => updateFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};
