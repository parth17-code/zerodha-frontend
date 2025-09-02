function SetDematAccount() {
  return (
    <>
      <div className="container-fluid" style={{padding:"5rem 5rem 5rem 8rem" , backgroundColor:"#f9f6f6ff"}}>
        <div className="row">
          <h3 className="text-center pb-4">
            Investment options with Zerodha demat account
          </h3>
        </div>
        <div className="row">
          <div className="col-6 pt-4">
            <img src="	https://zerodha.com/static/images/steps-acop.svg"></img>
          </div>
          <div className="col-6">
            <div className="d-flex border-bottom p-3">
              <div className="acop-steps">01</div>
              <h5 style={{paddingLeft:"1.5rem"}}>Enter the requested details</h5>
            </div>
            <div className="d-flex border-bottom p-3">
              <div className="acop-steps">01</div>
              <h5 style={{paddingLeft:"1.5rem"}}>Complete e-sign & verification</h5>
            </div>
            <div className="d-flex border-bottom p-3">
              <div className="acop-steps">01</div>
              <h5 style={{paddingLeft:"1.5rem"}}>Start investing!</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetDematAccount;
