

import RestaurantCard from './RestaurantCard ';
import { img_url } from "../Utils/constants";
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";

const Body = () => {  

  

 let[listOfRestaurant,setlistOfRestaurant]= useState([ 
      
]);
    let[textdata,setTextData]=useState("");

   useEffect(()=>{
    fetchData();

   },[]);

   const fetchData = async ()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setlistOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

   };
   const handleSearch = () => {
    const filterRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(textdata.toLowerCase()));
    setlistOfRestaurant(filterRestaurant);
  };
 
 
   return (
        <div className="body"> 
        <div className='search'>
        <input
          type='text'
          className='search-input'
          value={textdata}
          onChange={(e) => setTextData(e.target.value)}
        />
        <button className='search-btn' onClick={handleSearch}>
          Search
        </button>
      </div>

        <div className="filter">

               <button className='filter-btn' onClick={() => {
                  let filterlist = listOfRestaurant.filter(
                  (res)=>res.info.avgRating>4
          );
          setlistOfRestaurant(filterlist);
           
         
         }}>Top Rated Restaurant</button>

            {listOfRestaurant.length === 0 && <Shimmer />}

         </div>
            <div className='rest-Container'>
          {
           listOfRestaurant.map((restaurant) => (
           <Link key={restaurant.info.id} to ={"/restmenu/"+restaurant.info.id} > <RestaurantCard   restdata={restaurant.info} /></Link>
           ))
         }
       </div>
       
        
     </div>
     
   );
 };
 export default Body;