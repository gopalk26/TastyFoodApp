import { img_url } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
    if (!items) {
      return <div className="flex justify-center items-center h-screen"><div className="text-xl font-semibold">Loading...</div></div>;
    }
      const dispatch =useDispatch();

    const handleAddItem =(item)=>{
           dispatch(addItem(item));
    };
  
    return (
      <div className=" py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            {items.map((item) => (
              <div key={item.card.info.id} className="flex items-center py-4 relative border-rose-200 border-b-2 ">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h2>
                  <p className="text-gray-500">{item.card.info.description}</p>
                  <div className="flex items-baseline mt-2">
                    <span className="text-xl font-bold text-gray-900">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <img src={img_url + item.card.info.imageId} alt="" className="w-32 h-32 object-cover rounded-lg"/>
                  <button className="absolute bottom-0 mb-2 ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg font-semibold"
                    onClick={()=>handleAddItem(item)}
                  >
                    ADD <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemList;
  
  
  