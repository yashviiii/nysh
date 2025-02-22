// export const FinancialDetails = () => {
//     return(
//         <>
//         <div className="row">
//             <div className="input2">
//               <div className="title5">Turnover </div>
//               <div className="row2">
//                 <input className="textfield2" type="text" placeholder="FY 2022" />
//                 <input className="textfield2" type="text" placeholder="FY 2023" />
//                 <input className="textfield2" type="text" placeholder="FY 2024" />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input2">
//               <div className="title5">
//                 EBIT Earnings Before Interest and Taxes{" "}
//               </div>
//               <div className="row2">
//                 <input className="textfield2" type="text" placeholder="FY 2022" />
//                 <input className="textfield2" type="text" placeholder="FY 2023" />
//                 <input className="textfield2" type="text" placeholder="FY 2024" />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input2">
//               <div className="title5">PAT (Profit after Tax) </div>
//               <div className="row2">
//                 <input className="textfield2" type="text" placeholder="FY 2022" />
//                 <input className="textfield2" type="text" placeholder="FY 2023" />
//                 <input className="textfield2" type="text" placeholder="FY 2024" />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input2">
//               <div className="title5">Total EMI Payment (Per Month) </div>
//               <input className="textfield" type="text" placeholder="Enter the total EMI amount you are currently paying for loans" />
//             </div>
//           </div>
//           </>
//     )
// }

export const FinancialDetails = ({ formData, updateFormData }) => {
  const {
    turnover = { fy2022: "", fy2023: "", fy2024: "" },
    ebit = { fy2022: "", fy2023: "", fy2024: "" },
    pat = { fy2022: "", fy2023: "", fy2024: "" },
    totalEmi = "",
  } = formData;

  return (
    <>
      <div className="row">
        <div className="input2">
          <div className="title5">Turnover</div>
          <div className="row2">
            {["fy2022", "fy2023", "fy2024"].map((year) => (
              <input
                key={year}
                className="textfield2"
                type="text"
                placeholder={`FY ${year.slice(2)}`}
                value={turnover[year]}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    turnover: { ...turnover, [year]: e.target.value },
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">EBIT (Earnings Before Interest and Taxes)</div>
          <div className="row2">
            {["fy2022", "fy2023", "fy2024"].map((year) => (
              <input
                key={year}
                className="textfield2"
                type="text"
                placeholder={`FY ${year.slice(2)}`}
                value={ebit[year]}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    ebit: { ...ebit, [year]: e.target.value },
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">PAT (Profit After Tax)</div>
          <div className="row2">
            {["fy2022", "fy2023", "fy2024"].map((year) => (
              <input
                key={year}
                className="textfield2"
                type="text"
                placeholder={`FY ${year.slice(2)}`}
                value={pat[year]}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    pat: { ...pat, [year]: e.target.value },
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="input2">
          <div className="title5">Total EMI Payment (Per Month)</div>
          <input
            className="textfield"
            type="text"
            placeholder="Enter the total EMI amount you are currently paying for loans"
            value={totalEmi}
            onChange={(e) => updateFormData({ ...formData, totalEmi: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};
