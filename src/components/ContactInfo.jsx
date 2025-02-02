export const ContactInfo = () => {
    return(
        <>
        <div className="row">
              <div className="input2">
                <div className="title5">Name of Applicant</div>
                  <input className="textfield" type="text" placeholder="Enter Full Name" />
              </div>
            </div>
            <div className="row">
              <div className="input2">
                <div className="title5">Designation </div>
                <input className="textfield" type="text" placeholder="Enter your role, e.g., Owner, Director, CFO" />
              </div>
            </div>
            <div className="row">
              <div className="input2">
                <div className="title5">Email Address </div>
                <input className="textfield" type="text" placeholder="Enter email" />
              </div>
            </div>
            <div className="row">
              <div className="input2">
                <div className="title5">Phone Number </div>
                <input className="textfield" type="text" placeholder="Enter mobile number" />
              </div>
            </div>
        </>
    )
}