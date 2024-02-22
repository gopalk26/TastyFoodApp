

import RestaurantCard from './RestaurantCard ';
import { img_url,swiggy_api ,generateProxyUrl} from "../Utils/constants";
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";


const Body = () => {  
  const [originalList, setOriginalList] = useState([]); // Maintain original list
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [textData, setTextData] = useState("");
  const [searchError, setSearchError] = useState(false); // State to track search error

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const proxyUrl = generateProxyUrl(swiggy_api);
    const data = await fetch(proxyUrl);
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurants);
    setOriginalList(restaurants);
  };

  const handleSearch = () => {
    const filterRestaurant = originalList.filter((res) => res.info.name.toLowerCase().includes(textData.toLowerCase()));
    if (filterRestaurant.length === 0) {
      setSearchError(true); // Set search error if no results found
    } else {
      setSearchError(false);
    }
    setListOfRestaurant(filterRestaurant);
  };

  const filterTopRated = () => {
    const topRatedRestaurants = originalList.filter((res) => res.info.avgRating > 4);
    setListOfRestaurant(topRatedRestaurants);
  };

  return (
    <div className="ml-16 mr-16">
      <div className='filter flex'>
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
          <button className='rounded-xl px-5 py-1  ml-12  border-double border-4 border-rose-500 hover:bg-rose-200' onClick={filterTopRated}>
            Top Rated Restaurants
          </button>
          {listOfRestaurant.length === 0 && <Shimmer />}
          {searchError && <p>No results found.</p>} {/* Display error message */}
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