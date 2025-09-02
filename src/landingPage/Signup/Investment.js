function Investment() {
    return ( 
        <>
        <div className="container py-5">
            <div className="row">
                <h3 className="text-center pb-4">Investment options with Zerodha demat account</h3>
                <div className="col-6 d-flex align-items-center">
                    <img src="https://zerodha.com/static/images/stocks-acop.svg" alt="invest-in-stocks" style={{width:"30%" , margin:"2rem"}}></img>
                    <div>
                        <h4>Stocks</h4>
                        <p className="fs-5">Invest in all exchange-listed securities</p>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <img src="	https://zerodha.com/static/images/mf-acop.svg" alt="invest-in-stocks" style={{width:"30%" , margin:"2rem"}}></img>
                    <div>
                        <h4>Stocks</h4>
                        <p className="fs-5">Invest in all exchange-listed securities</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex align-items-center">
                    <img src="https://zerodha.com/static/images/ipo-acop.svg" alt="invest-in-stocks" style={{width:"30%" , margin:"2rem"}}></img>
                    <div>
                        <h4>Stocks</h4>
                        <p className="fs-5">Invest in all exchange-listed securities</p>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <img src="	https://zerodha.com/static/images/fo-acop.svg" alt="invest-in-stocks" style={{width:"30%" , margin:"2rem"}}></img>
                    <div>
                        <h4>Stocks</h4>
                        <p className="fs-5">Invest in all exchange-listed securities</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center pt-3">
                <button className="btn" style={{width:"25%" , backgroundColor:"#387ed1"}}><b className="text-white fs-5">Explore Investment</b></button>
            </div>
        </div>
        </>
     );
}

export default Investment;