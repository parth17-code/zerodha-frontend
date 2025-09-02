import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
    return ( 
        <>
        <Hero></Hero>
        <LeftSection imageUrl={"assets/kite.png"} productName={"Kite"} productDescription={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"} tryDemo={""} learnMore={""}></LeftSection>
        <RightSection imageUrl={"assets/console.png"} productName={"Console"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} injectedText={"Learn more"} learnMore={""} imgHeight={"95%"}></RightSection>
        <LeftSection imageUrl={"assets/coin.png"} productName={"Coin"} productDescription={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} tryDemo={""} learnMore={""}></LeftSection>
        <RightSection imageUrl={"assets/kiteconnect.png"} productName={"Kite connect API"} productDescription={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} injectedText={"Kite connect"} learnMore={""}></RightSection>
        <LeftSection imageUrl={"assets/varsity.png"} productName={"Varsity mobile"} productDescription={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} tryDemo={""} learnMore={""}></LeftSection>
        </>
     );
}

export default ProductPage;