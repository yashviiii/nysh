// export const BasicDetails = () => {
//     return(
//         <>
//         <div className="row">
//               <div className="input2">
//                 <div className="title5">Business Name </div>
//                   <input className="textfield" type="text" placeholder="Enter Business Name" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="input2">
//                 <div className="title5">Industry </div>
//                 <input className="textfield" type="text" placeholder="Enter your industry" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="input2">
//                 <div className="title5">Location </div>
//                 <input className="textfield" type="text" placeholder="City" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="input2">
//                 <div className="title5">Date of incorporation </div>
//                 <input className="textfield" type="text" placeholder="DD-MM-YYY" />
//               </div>
//             </div>
//         </>
//     )
// }

export const BasicDetails = ({ formData, updateFormData }) => {
  
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="row">
        <div className="input2">
          <div className="title5">Business Name </div>
          <input 
            className="textfield" 
            type="text" 
            name="businessName"
            placeholder="Enter Business Name" 
            value={formData.businessName || ""} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">Industry </div>
          <input 
            className="textfield" 
            type="text" 
            name="industry"
            placeholder="Enter your industry" 
            value={formData.industry || ""} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">Location </div>
          <input 
            className="textfield" 
            type="text" 
            name="location"
            placeholder="City" 
            value={formData.location || ""} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">Date of Incorporation </div>
          <input 
            className="textfield" 
            type="text" 
            name="incorporationDate"
            placeholder="DD-MM-YYYY" 
            value={formData.incorporationDate || ""} 
            onChange={handleChange} 
          />
        </div>
      </div>
    </>
  );
};
