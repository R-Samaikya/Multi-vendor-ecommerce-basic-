import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
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
        "http://localhost:5000/api/auth/register",
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

        alert("Register successful");

        navigate("/login");

      } else {

        alert(data.message);

      }


    } catch(error){

      console.log(error);

    }

  };


  return (
    <div>

      <h1>Register</h1>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

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
        Create Account
      </button>

    </div>
  );
}

export default Register;