import { img_url } from "../Utils/constants";
import Body from "./Body";

const RestaurantCard = (props) => {
  const { restdata } = props;

  return (
    <div className='restcard w-64 h-96  border border-gray-200 rounded-lg overflow-hidden shadow-lg shadow-rose-500/50 hover:border-blue-500 transform hover:scale-105 transition-all duration-300 mx-2 my-4'>
      <div className='restcard-image'>
        <img alt="foodimage" src={img_url + restdata.cloudinaryImageId} className='w-full h-40 object-cover rounded-t-lg rounded-lg' />
      </div>
      <div className='restcard-details p-3'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>{restdata.name}</h3>
        <h4 className='text-sm text-gray-600 mb-1'>{restdata.cuisines.join(", ")}</h4>
        <h4 className='text-sm font-semibold text-orange-500 mb-1'>{restdata.avgRating}</h4>
        <h4 className='text-sm text-gray-600 mb-1'>{restdata.costForTwo}</h4>
        <h4 className='text-sm text-gray-600'>{restdata.sla.deliveryTime} Mins</h4>
        <h4 className='text-sm text-gray-600'>{restdata.locality} </h4>

      </div>
    </div>
  );
};
export default RestaurantCard;