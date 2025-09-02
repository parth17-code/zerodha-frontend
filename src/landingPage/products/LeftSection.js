function LeftSection({imageUrl , productName , productDescription , tryDemo , learnMore , googlePlay , appStore, imgWidth , imgHeight}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-3">
                    <img src={imageUrl} style={{width:imgWidth || "100%" , height:imgHeight || "100%"}}></img>
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="row mb-4">
                        <div className="col-6">
                            <a href={tryDemo} style={{textDecoration:"none" , fontWeight:"500"}}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="col-6">
                            <a href={learnMore} style={{textDecoration:"none" , fontWeight:"500"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <a href={googlePlay}><img src="assets/googlePlayBadge.svg"></img></a>
                        </div>
                        <div className="col-6">
                            <a href={appStore}><img src="assets/appstoreBadge.svg"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;