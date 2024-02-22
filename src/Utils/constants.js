export const logo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTNhmkEvbeOtu0cY76jpf4KvqpcVWEGY76A&usqp=CAU";

   export const img_url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    
    export const shimmer_card_unit = 20;
   
   export const item_img_cdn_url ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";
   export const MENU_ITEM_TYPE_KEY  = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
   export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
   

   export const PROXY_CORS = "https://corsproxy.org/?";
   export const generateProxyUrl = (URL) => PROXY_CORS + encodeURIComponent(URL);

   export const swiggy_api= "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
   export  const  swiggy_menu_api_URL ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=";
   
//    const lat = 17.406498;
// const lng = 78.47724389999999;
// const page_type = "DESKTOP_WEB_LISTING";

// // Construct the URLs with the parameters
// export const swiggy_api = `http://localhost:3000/api/restaurants?lat=${lat}&lng=${lng}&page_type=${page_type}`;
// export const swiggy_menu_api_URL = `http://localhost:3000/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&submitAction=ENTER&restaurantId=`;
