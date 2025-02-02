export const BasicDetails = () => {
    return(
        <>
        <div className="row">
              <div className="input2">
                <div className="title5">Business Name </div>
                  <input className="textfield" type="text" placeholder="Enter Business Name" />
              </div>
            </div>
            <div className="row">
              <div className="input2">
                <div className="title5">Industry </div>
                <input className="textfield" type="text" placeholder="Enter your industry" />
              </div>
            </div>
            <div className="row">
              <div className="input2">
                <div className="title5">Location </div>
                <input className="textfield" type="text" placeholder="City" />
              </div>
            </div>
            <div className="row">
              <div className="input2">
                <div className="title5">Date of incorporation </div>
                <input className="textfield" type="text" placeholder="DD-MM-YYY" />
              </div>
            </div>
        </>
    )
}