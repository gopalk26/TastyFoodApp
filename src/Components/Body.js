

import RestaurantCard from './RestaurantCard ';
import { img_url } from "../Utils/constants";
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";

const Body = () => {  
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [textData, setTextData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
  };

  const handleSearch = () => {
    const filterRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(textData.toLowerCase()));
    setListOfRestaurant(filterRestaurant);
  };

  return (
    <div className="ml-16 mr-16">

      <div className='filter flex  '> 
      <div className='search ml-8 mt-8'>
        <input
          type='text'
          className='search-input rounded-xl px-6 py-1 border border-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500'
          value={textData}
          onChange={(e) => setTextData(e.target.value)}
          placeholder="Search restaurants..."
        />
        <button className='search-btn bg-rose-700 text-white rounded-lg px-4 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-rose-500 hover:bg-rose-500' onClick={handleSearch}>
          Search
        </button>

        <button className='rounded-xl px-5 py-1  ml-12  border-double border-4 border-rose-500 hover:bg-rose-200' onClick={() => {
          let filterList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
          setListOfRestaurant(filterList);
        }}>
          Top Rated Restaurants
        </button>
        {listOfRestaurant.length === 0 && <Shimmer />}

      </div>

      </div>

    
      <div className='flex flex-wrap justify-between  m-5 py-4'>
        {listOfRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restmenu/" + restaurant.info.id}>
            <RestaurantCard restdata={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;