function ChargesExplain() {
    return ( 
        <div className="container" style={{paddingBottom:"80px"}}>
            <h2 style={{fontSize:"1.5rem" , lineHeight:"1.5" , fontWeight:"500" , paddingTop:"80px" , marginBottom:"20px"}}>Charges explained</h2>
            <div className="row" style={{fontSize:"1.5rem" , lineHeight:"1.8"}}>
                <div className="col-6">
                    <p style={{fontSize:"1rem"}}>Securities/Commodities transaction tax</p>
                    <p style={{fontSize:"0.75rem"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p style={{fontSize:"0.75rem"}}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                    <p style={{fontSize:"1rem"}}>Transaction/Turnover Charges</p>
                    <p style={{fontSize:"0.75rem"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p style={{fontSize:"0.75rem"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p style={{fontSize:"0.75rem"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    <p style={{fontSize:"0.75rem"}}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p style={{fontSize:"0.75rem"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                    <p style={{fontSize:"1rem"}}>Call & trade</p>
                    <p style={{fontSize:"0.75rem"}}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                    <p style={{fontSize:"1rem"}}>Stamp charges</p>
                    <p style={{fontSize:"0.75rem"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <p style={{fontSize:"1rem"}}>NRI brokerage charges</p>
                    <ul>
                        <li style={{fontSize:"0.75rem"}}>₹100 per order for futures and options.</li>
                        <li style={{fontSize:"0.75rem"}}>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize:"0.75rem"}}>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize:"0.75rem"}}>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>

                    <p style={{fontSize:"1rem"}}>Account with debit balance</p>
                    <p style={{fontSize:"0.75rem"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

                    <p style={{fontSize:"1rem"}}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <ul>
                        <li style={{fontSize:"0.75rem"}}>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li style={{fontSize:"0.75rem"}}>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li style={{fontSize:"0.75rem"}}>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>

                    <p style={{fontSize:"1rem"}}>Margin Trading Facility (MTF)</p>
                    <ul>
                        <li style={{fontSize:"0.75rem"}}>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li style={{fontSize:"0.75rem"}}>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li style={{fontSize:"0.75rem"}}>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                </div>
                <div className="col-6">
                    <p style={{fontSize:"1rem"}}>GST</p>
                    <p style={{fontSize:"0.75rem"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges).</p>

                    <p style={{fontSize:"1rem"}}>GST</p>
                    <p style={{fontSize:"0.75rem"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                    <p style={{fontSize:"1rem"}}>DP (Depository participant) charges</p>
                    <p style={{fontSize:"0.75rem"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p style={{fontSize:"0.75rem"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p style={{fontSize:"0.75rem"}}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                    <p style={{fontSize:"1rem"}}>Pledging charges</p>
                    <p style={{fontSize:"0.75rem"}}>₹30 + GST per pledge request per ISIN.</p>

                    <p style={{fontSize:"1rem"}}>AMC (Account maintenance charges)</p>
                    <p style={{fontSize:"0.75rem"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="">Click here</a></p>
                    <p style={{fontSize:"0.75rem"}}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="">Click here</a></p>

                    <p style={{fontSize:"1rem"}}>Corporate action order charges</p>
                    <p style={{fontSize:"0.75rem"}}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                    <p style={{fontSize:"1rem"}}>Physical CMR request</p>
                    <p style={{fontSize:"0.75rem"}}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                    <p style={{fontSize:"1rem"}}>Off-market transfer charges</p>
                    <p style={{fontSize:"0.75rem"}}>₹25 per transaction.</p>

                    <p style={{fontSize:"1rem"}}>Payment gateway charges</p>
                    <p style={{fontSize:"0.75rem"}}>₹9 + GST (Not levied on transfers done via UPI)</p>

                    <p style={{fontSize:"1rem"}}>Delayed Payment Charges</p>
                    <p style={{fontSize:"0.75rem"}}>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="">Learn more.</a></p>

                    <p style={{fontSize:"1rem"}}>Delayed Payment Charges</p>
                    <ul>
                        <li style={{fontSize:"0.75rem"}}><b>Delivery & MTF Brokerage:</b> 0.5% per executed order.</li>
                        <li style={{fontSize:"0.75rem"}}><b>Intraday Brokerage:</b> 0.05% per executed order.</li>
                    </ul>
                </div>    
            </div>
            <div className="row mt-3">
                <p style={{fontSize:"1rem"}}>Disclaimer</p>
                <p style={{fontSize:"0.75rem"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>
     );
}

export default ChargesExplain;