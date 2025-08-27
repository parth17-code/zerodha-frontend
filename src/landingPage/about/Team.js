function Team() {
    return ( 
        <div className="container">
      <div className="row p-1 mb-1 mt-1">
        <h1 className="fs-3 text-center">
          People
        </h1>
      </div>
      <div className="row p-3 text-muted" style={{lineHeight:"1.8" , fontSize:"1rem"}}>
        <div className="col-6 p-5 text-center">
            <img src="assets/nithinKamath.jpg" style={{borderRadius:"100%" , width:"60%"}}></img>
            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Founder , CEO</h6>
        </div>
        <div className="col-6 p-5">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <br></br>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <br></br>
            <p>Playing basketball is his zen.</p>
            <br></br>
            <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
     );
}

export default Team;<h1>Team</h1>