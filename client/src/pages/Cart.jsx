import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.qty || 1),
    0
  );

  const checkout = async () => {

  try {

    const token = localStorage.getItem("token");


    const res = await fetch(
      "http://localhost:5000/api/orders",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`
        },

        body:JSON.stringify({
          products:cart,
          totalAmount:total
        })
      }
    );


    const data = await res.json();


    if(res.ok){

      alert("Order placed successfully");

      navigate("/");

    }else{

      alert(data.message);

    }


  }catch(error){

    console.log(error);

  }

};
  return (

    <div style={{padding:"20px"}}>

      <h1>Your Cart</h1>


      {cart.length === 0 ? (

        <h2>Cart is empty</h2>

      ) : (

        <>

        {
          cart.map((item)=>(

            <div
              key={item._id}
              style={{
                display:"flex",
                gap:"20px",
                alignItems:"center",
                border:"1px solid #ddd",
                padding:"15px",
                margin:"15px",
                borderRadius:"12px"
              }}
            >

              <img
                src={item.image}
                width="90"
                height="90"
              />


              <div>

                <h3>{item.name}</h3>

                <p>
                  Price: ₹{item.price}
                </p>


                <p>
                  Quantity: {item.qty || 1}
                </p>


                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                >
                  Remove
                </button>


              </div>


            </div>

          ))
        }


        <h2>
          Total: ₹{total}
        </h2>


        <button
  onClick={checkout}
>
  Checkout
</button>


        </>

      )}

    </div>

  );
}

export default Cart;