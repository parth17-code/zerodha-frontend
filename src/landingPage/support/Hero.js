function Hero() {
  return (
    <div className="container-fluid" style={{marginBottom:"3rem"}}>
      <div className="row support-portal">
        <div className="col" style={{padding:"0"}}>
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ height: "4rem", padding: "4.5rem 7.5rem 2rem 7.5rem" }}
        >
          <p className="fs-1" style={{ fontWeight: "bold" }}>
            Support portal
          </p>
          <h3 className="">
            <span class="badge" style={{marginRight:"1.5rem", backgroundColor:"#397DD0"}}>My tickets</span>
          </h3>
        </div>
        </div>
        <div className="row">
        <div className="col" style={{ height: "4rem", padding: "0 7.5rem 0rem 7.5rem" }}>
          <div class="input-group flex-nowrap" style={{height:"60px"}}>
            <input
              type="text"
              class="form-control"
              placeholder="  Eg: How do I open my account , How do I activate F&O.." style={{fontWeight:"600" , opacity:"60%"}}
              aria-label="Username"
              aria-describedby="addon-wrapping"
            ></input>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
