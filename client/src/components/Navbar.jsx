import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");


  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };


  return (

    <nav
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        background: "#222",
        color: "white"
      }}
    >

      <h2>Dheeraj Naturals</h2>


      <div>

        <Link
          to="/"
          style={{ color:"white", margin:"10px" }}
        >
          Home
        </Link>


        <Link
          to="/cart"
          style={{ color:"white", margin:"10px" }}
        >
          Cart
        </Link>


        {!token ? (

          <>

            <Link
              to="/login"
              style={{ color:"white", margin:"10px" }}
            >
              Login
            </Link>


            <Link
              to="/register"
              style={{ color:"white", margin:"10px" }}
            >
              Register
            </Link>

          </>

        ) : (

          <button onClick={logout}>
            Logout
          </button>

        )}

      </div>

    </nav>

  );

}

export default Navbar;