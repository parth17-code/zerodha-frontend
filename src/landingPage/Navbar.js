import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom mb-3">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="assets/logo.svg" alt="logo" style={{width:"25%"}}></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                SignUp
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link active" to="/products">
                Product
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
