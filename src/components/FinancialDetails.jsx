export const FinancialDetails = () => {
    return(
        <>
        <div className="row">
            <div className="input2">
              <div className="title5">Turnover </div>
              <div className="row2">
                <input className="textfield2" type="text" placeholder="FY 2022" />
                <input className="textfield2" type="text" placeholder="FY 2023" />
                <input className="textfield2" type="text" placeholder="FY 2024" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input2">
              <div className="title5">
                EBIT Earnings Before Interest and Taxes{" "}
              </div>
              <div className="row2">
                <input className="textfield2" type="text" placeholder="FY 2022" />
                <input className="textfield2" type="text" placeholder="FY 2023" />
                <input className="textfield2" type="text" placeholder="FY 2024" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input2">
              <div className="title5">PAT (Profit after Tax) </div>
              <div className="row2">
                <input className="textfield2" type="text" placeholder="FY 2022" />
                <input className="textfield2" type="text" placeholder="FY 2023" />
                <input className="textfield2" type="text" placeholder="FY 2024" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input2">
              <div className="title5">Total EMI Payment (Per Month) </div>
              <input className="textfield" type="text" placeholder="Enter the total EMI amount you are currently paying for loans" />
            </div>
          </div>
          </>
    )
}