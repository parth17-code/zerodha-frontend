import { useEffect, useState } from "react";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SingupComponent";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Investment from "./Investment";
import SetDematAccount from "./SetDematAccount";
import FAQ from "./FAQ";
import OpenAccount from "../OpenAccount";

function Signup() {
const [showLogin , setShowLogin] = useState(false);

  return (
    <>
      <div
        className="container mt-5 mb-5 text-center border-bottom"
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
          Open a free demat and trading account online
        </h3>
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
            marginTop: "10px",
            opacity: "90%",
          }}
        >
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <div className="row pt-5">
          <div className="col-8">
            <img
              src="assets/signup.png"
              alt="singup image"
              style={{ width: "80%" }}
            ></img>
          </div>
          <div className="col-4">
            {showLogin ? (
              <LoginComponent onSwicth={()=>{setShowLogin(false)}}></LoginComponent>
            ) : (
              <SignupComponent onSwicth={()=>{setShowLogin(true)}}></SignupComponent>
            )}
          </div>
        </div>
      </div>
      <Investment></Investment>
      <SetDematAccount></SetDematAccount>
      <FAQ></FAQ>
      <OpenAccount></OpenAccount>
    </>
  );
}

export default Signup;
