function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="container mt-5 mb-5 text-center"
          style={{ paddingBottom: "100px", paddingTop: "100px" }}
        >
          <h3
            style={{
              fontSize: "1.75rem",
              lineHeight: "1.25",
              fontWeight: "500",
              opacity: "90%",
            }}
          >
            Charges
          </h3>
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "475",
              marginTop: "10px",
              opacity: "55%",
            }}
          >
            List of all charges and taxes.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center">
            <img src="assets/pricing0.svg" style={{width:"60%"}}></img>
            <h3 style={{fontSize:"1.75rem", fontWeight:"500" , opacity:"90%"}}>Free equity and delivery</h3>
            <p style={{opacity:"70%" , lineHeight:"1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 text-center">
            <img src="assets/intradayTrades.svg" style={{width:"60%"}}></img>
            <h3 style={{fontSize:"1.75rem", fontWeight:"500" , opacity:"90%"}}>Intraday and F&O trades</h3>
            <p style={{opacity:"70%" , lineHeight:"1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 text-center">
            <img src="assets/pricing0.svg" style={{width:"60%"}}></img>
            <h3 style={{fontSize:"1.75rem", fontWeight:"500" , opacity:"90%"}}>Free direct MF</h3>
            <p style={{opacity:"70%" , lineHeight:"1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
