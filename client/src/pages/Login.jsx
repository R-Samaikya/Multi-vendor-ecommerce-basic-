import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email:"",
    password:""
  });


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(form)
        }
      );


      const data = await res.json();


      if(res.ok){

        localStorage.setItem(
          "token",
          data.token
        );


        alert("Login successful");

        navigate("/");

      } else {

        alert(data.message);

      }


    } catch(error){

      console.log(error);

    }

  };


  return (
    <div>

      <h1>Login</h1>


      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />


      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />


      <button onClick={handleSubmit}>
        Login
      </button>


    </div>
  );
}


export default Login;