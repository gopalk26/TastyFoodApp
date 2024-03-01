import { useEffect, useState } from "react";
import { swiggy_menu_api_URL ,RESTAURANT_TYPE_KEY,img_url,item_img_cdn_url,
  MENU_ITEM_TYPE_KEY , generateProxyUrl} from "../Utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]); // Declare categories state

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const proxyUrl = generateProxyUrl(swiggy_menu_api_URL+ resId);
const response = await fetch(proxyUrl);
      const json = await response.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantData);

      

      const newCategories = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.['@type'] === MENU_ITEM_TYPE_KEY || c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
     
      
      setCategories(newCategories); // Set categories state

    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  // Check if restaurant data is available, render loading otherwise render restaurant details and menu items
  return !restaurant ? (
    <Shimmer />
  ) : (
      <div>

   <div className="w-2/12 m-auto font-sans mt-4">
      <div className="flex mb-5">
        <img
          className="w-52 h-52 object-cover rounded-lg mr-5"
          src={img_url + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className=" flex-shrink-0">
          <h2 className="font-bold text-base mb-3  flex">{restaurant?.name}</h2>
          <p className="text-sm mb-2 inline-flex">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div className="inline-block bg-rose-600 text-white py-1 px-3 rounded-md mr-1" style={
              (restaurant?.avgRating) < 4
                ? { backgroundColor: "var(--light-red)" }
                : (restaurant?.avgRating) === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }>
              <i className="fa-solid fa-star"></i>
              <span className="ml-1">{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
        
    </div>
        <div>
         {/* categories accordions */}
       {categories.map((category) => (
       <RestaurantCategory key={category?.card?.card?.title} data ={category?.card?.card}/>
          ))}
          </div>
</div>
  );
};

export default RestaurantMenu;