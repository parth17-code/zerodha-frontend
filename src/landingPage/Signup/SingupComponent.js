import { useState } from "react";
import axios from "axios";

function SignupComponent({onSwicth}) {

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmitFormClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/signup`, {
        Username: formdata.username,
        email: formdata.email,
        password: formdata.password,
        createdAt: new Date(),
      },{withCredentials:true});

      if (res.data.success) {
        console.log("Signup successful!");
        setTimeout(() => {
          window.location.href = "https://zerodha-dashboard-green.vercel.app";
        }, 1000)
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <>
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
              Signup now
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
                name="username"
                onChange={handleChange}
                placeholder="Enter username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
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
              Signup
            </button>
            <p style={{opacity:"50%" , display:"inline" , marginLeft:"2rem" , textWrap:"wrap"}}>Account already exists? <span className="text-primary login-link" style={{cursor:"pointer"}} onClick={onSwicth}>Login</span></p>
          </form>
    </>
  );
}

export default SignupComponent;
