import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const CartPage = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);

        const dispatch = useDispatch();

        const handleClearCart = ()=>{
            dispatch(clearCart());

        };

     return(
        <div className="m-auto   w-7/12">
            <h1 className="font-bold  text-sky-900 text-3xl py-5 text-center">Cart</h1>
           <button onClick={handleClearCart} className=' bg-rose-500 text-white rounded-lg px-4 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-rose-500 hover:bg-rose-400'>ClearCart</button>

            {cartItems.length===0 &&(<h1 className="text-center text-xl py-16 font-semibold">Your Cart Is Empty . Add Items To The Cart..</h1>)}
            <div>
                <ItemList items={cartItems}/>
            </div>
          

        </div>

     );
};

export default CartPage;