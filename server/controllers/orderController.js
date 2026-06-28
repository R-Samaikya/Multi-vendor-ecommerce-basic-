import Order from "../models/Order.js";


export const createOrder = async (req,res)=>{

  try{

    const { products, totalAmount } = req.body;


    const order = await Order.create({
      user:req.user.id,
      products,
      totalAmount
    });


    res.json({
      message:"Order created",
      order
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};