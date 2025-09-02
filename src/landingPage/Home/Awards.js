

function Awards() {
    return ( 
    <div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5">
                <img src="assets/largestBroker.svg"></img>
            </div>
            <div className="col-6 p-5 mt-3">
                <h1>Largest stock broker in India</h1>
                <p className="mb-5">2+ million Zerodha clients contribute over 16% of all retail order volumes in India daily by trading and investing in: </p>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt. securities</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="assets/pressLogos.png" style={{width:"90%"}}></img>
            <div>   
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Awards;