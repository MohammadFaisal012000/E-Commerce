import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useState } from "react";

const Cart = () => {

  const {cart}=useSelector((state)=>state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])
  return (
    <div>
      <div >
        {
          cart.length>0?
          (<div className="flex flex-col gap-7  md:flex-row max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh ]  mb-20 ">
             <div className="items-center md:w-7/12 w-full md:ml-52">
            {
              cart.map((item,index)=>{
               return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
              })
            }
            </div>
            <div className=" flex flex-col  justify-between md:items-start   md:w-5/12 w-[full] md:mt-5 ">
              <div>
                <p className="text-green-600 font-semibold uppercase text-lg">Your Cart</p>
                <h1 className="text-green-700 font-semibold uppercase text-4xl">Summary</h1>
                <div className="text-base text-gray-700">Total items: {cart.length}</div>
              </div>
              <div className="flex flex-col   space-y-3">
                <p className="text-base text-gray-700">Total Amount : <span className="font-semibold text-gray-900">${totalAmount}</span></p>
                <button className="w-[100%] md:px-14 px-20 rounded-md bg-green-700 text-white font-semibold py-2  hover:bg-white hover:text-green-700 transition-all duration-300 ease-in border-2 border-green-700">Checkout Now</button>
              </div>
            </div>

            
          </div>):
          (<div className="flex justify-center items-center flex-col h-[80vh] gap-6 w-full">
            <h1 className="text-green-600 text-xl ">Cart is Empty Now!</h1>
            <NavLink to="/">
              <button className="w-full rounded-md  bg-green-700 px-4 text-white font-semibold py-2 hover:bg-white hover:text-green-700 transition-all duration-300 ease-in uppercase border-green-700 border-2" >Shop Now</button>
            </NavLink>
          </div>)
        }
      </div>
    </div>
  );
};

export default Cart;
