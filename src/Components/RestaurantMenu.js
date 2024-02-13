import { useEffect, useState } from "react";
import { swiggy_menu_api_URL ,RESTAURANT_TYPE_KEY,img_url,item_img_cdn_url,MENU_ITEM_TYPE_KEY } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData = json?.data?.cards
  ?.find(x => x.groupedCard)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ?.flatMap(card => card.card?.card?.itemCards || [])
  ?.map(card => card.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  // Check if restaurant data is available, render loading otherwise render restaurant details and menu items
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={img_url + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div className="restaurant-rating" style={
              (restaurant?.avgRating) < 4
                ? { backgroundColor: "var(--light-red)" }
                : (restaurant?.avgRating) === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }>
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      {/* Render menu items */}
      <div className="menu-items-container">
        <h3>Menu</h3>
        <div className="menu-items">
          {menuItems.map(item => (
            <div className="menu-item" key={item?.id}>
              <div className="menu-item-details">
                <h4>{item?.name}</h4>
                <p>{item?.description}</p>
                <p>Price: {item?.price/100}</p>
              </div>
              {item?.imageId && (
                <img
                  className="menu-item-image"
                  src={item_img_cdn_url + item?.imageId}
                  alt={item?.name}
                />
              )}
               <button className="add-btn"> ADD +</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;