function Brokerage() {
  return (
    <div className="container">
      <p
        className="text-center mb-5"
        style={{ fontWeigh: "400", fontSize: "1.25rem" }}
      >
        <a href="" style={{ textDecoration: "none", color: "#387ed1" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
      <h2
        style={{
          fontSize: "1.5rem",
          lineHeight: "1.5",
          fontWeight: "500",
          paddingTop: "80px",
          marginBottom: "20px",
        }}
      >
        Charges for opening account
      </h2>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" style={{paddingTop:"1rem", paddingBottom:"1rem"}}>
          <p style={{fontWeight:"500" , fontSize:"0.875rem" , margin:"0"}}>Type of account</p>
          <span style={{marginRight:"5rem" , fontWeight:"500" , fontSize:"0.875rem"}}>Charges</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center" style={{borderTop:"none" , borderBottom:"none" , paddingTop:"1rem", paddingBottom:"1rem"}}>
          <p style={{fontSize:"0.875rem" , margin:"0"}}>Online account</p>
          <span style={{marginRight:"5rem" , fontWeight:"500" , fontSize:"0.875rem"}}><h5><span class="badge text-bg-success">Free</span></h5></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center" style={{borderTop:"none" , borderBottom:"none" , paddingTop:"1rem", paddingBottom:"1rem"}}>
          <p style={{fontSize:"0.875rem" , margin:"0"}}>Offline account</p>
          <span style={{marginRight:"5rem" , fontWeight:"500" , fontSize:"0.875rem"}}><h5><span class="badge text-bg-success">Free</span></h5></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center" style={{borderTop:"none" , borderBottom:"none" , paddingTop:"1rem", paddingBottom:"1rem"}}>
          <p style={{fontSize:"0.875rem" , margin:"0"}}>NRI account (offline only)</p>
          <span style={{marginRight:"5rem" , fontSize:"0.875rem"}}>₹ 500</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center" style={{borderTop:"none" , paddingTop:"1rem", paddingBottom:"1rem"}}>
          <p style={{fontSize:"0.875rem" , margin:"0"}}>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
          <span style={{marginRight:"5rem" , fontSize:"0.875rem"}}>₹ 500</span>
        </li>
      </ul>
    </div>
  );
}

export default Brokerage;
