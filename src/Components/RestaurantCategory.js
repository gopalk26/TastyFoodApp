
import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data }) => {
  const[showItems,setshowItems]=useState(false);

   const handleClick=()=>{
        setshowItems(!showItems);
   };
   return (
      <div>
         <div className="w-6/12 my-4 bg-white-50 shadow-lg shadow-rose-200 m-auto p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
               <span className="font-bold text-lg">
                  {data?.title}({data?.itemCards?.length || data?.
           categories[0]?.itemCards?.length})
               </span>
               <span className="text-slate-600">▼</span>
            </div>
           {showItems && <ItemList items ={data.itemCards||data?.
           categories[0]?.itemCards} />}
         </div>
      </div>
   );
};

export default RestaurantCategory;


