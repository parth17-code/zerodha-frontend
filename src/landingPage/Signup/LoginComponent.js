import React, { useState } from "react";
import axios from "axios";

function LoginComponent({onSwicth}) {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmitFormClick = async (e) => {
    e.preventDefault();
    console.log("Login form submitted", formdata);

    try {
      const res = await axios.post("https://zerodha-frontend-4blv.vercel.app/login", {
        email: formdata.email,
        password: formdata.password,
      },{withCredentials:true});

      if (res.data.success) {
        console.log("Login successful!");
        setTimeout(() => {
          window.location.href = "https://zerodha-dashboard-green.vercel.app";
        }, 1000) 
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form>
          <h3
            style={{
              textAlign: "start",
              fontSize: "1.75rem",
              lineHeight: "1.25",
              fontWeight: "500",
              opacity: "90%",
            }}
          >
            Login
          </h3>
          <p
            style={{
              textAlign: "start",
              fontSize: "1rem",
              fontWeight: "400",
              marginTop: "10px",
              opacity: "60%",
            }}
          >
             To open <b>Kite </b>app!
          </p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              name="email"
              onChange={handleChange}
              placeholder="Enter you gmail address"
              aria-label="Recipient’s username"
              aria-describedby="basic-addon2"
            ></input>
            <span class="input-group-text" id="basic-addon2">
              @gmail.com
            </span>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Set your password"
              onChange={handleChange}
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            onClick={handleSubmitFormClick}
            style={{ backgroundColor: "#387ed1" }}
          >
            Login
          </button>
          <p style={{opacity:"50%" , display:"inline" , marginLeft:"2rem" , textWrap:"wrap"}}>Don't have an account? <span className="text-primary signup-link" style={{cursor:"pointer",color:"#0d6efd"}} onClick={onSwicth}>Signup</span></p>
        </form>
      </div>
    </>
  );
}

export default LoginComponent;
