

function Stats() {
    return ( 
    <div className="container p-3">
        <div className="row p-5">
            <div className="col-6 p-5">
                <h1 className="mb-5 fs-2">Trust with Confidence</h1>
                <h2 className="fs-4">Customer first always</h2>
                <p className="mb-4 text-muted">That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments. </p>

                <h2 className="fs-4">No spams or gimmicks</h2>
                <p className="mb-4 text-muted">No gimmicks , spams , "gamification", or annoying push notifications. High quality app that you use at your pace, the way you like. </p>

                <h2 className="fs-4">The Zerodha universe</h2>
                <p className="mb-4 text-muted">Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored service specific to your needs. </p>

                <h2 className="fs-4">Do better with money</h2>
                <p className="mb-4 text-muted">With initiatives like Nudge and Kill Switch, we don't juts faciliate transactions, but actively help you do better with your money</p>
            </div>
            <div className="col-6 p-5">
                <img src="assets/ecosystem.png" style={{width:"95%" , height:"100%"}}></img>

                <div className="text-center">
                    <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" className="mx-5" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
     );
}

export default Stats;