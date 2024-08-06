import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item , itemIndex}) => {

  const dispatch=useDispatch();

  const removeFromCart=()=>{
    console.log(`CartItem is ${item.id}`);
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }

  return (
    <div className="flex border-b-2 justify-evenly items-center mt-5 py-4 w-full gap-8">
      <div className="h-[180px] ">
        <img src={item.image} alt="" className="w-full h-full " />
      </div>
      <div className="flex flex-col gap-y-4 w-[60%]">
        <h1 className="text-gray-700 font-semibold text-lg text-left  mt-1 w-[]">{item.title}</h1>
        <p className=" text-gray-500 font-normal text-[13px] text-left mt-1 mb-1  ">
          {item.description.split(" ").slice(0,15).join(" ")+"..."}
        </p>
        <div className="flex justify-between items-center ml-2 mr-2">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div
          className="bg-red-500 w-[20px] h-[20px] rounded-full  cursor-pointer"
          onClick={removeFromCart}
          >
             <MdDelete className="text-red-800 mx-auto mt-[2px]"/>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
