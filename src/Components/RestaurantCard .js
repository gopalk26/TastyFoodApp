import { img_url } from "../Utils/constants";
import Body from "./Body";

const RestaurantCard = (props) => {
  const { restdata } = props;

  return (
    <div className='restcard'>
      <div className='restcard-image'>
      <img alt="foodimage" src={img_url+restdata.cloudinaryImageId} />

      </div>
      <div className='restcard-details'>
        <h3>{restdata.name}</h3>
        <h4>{restdata. cuisines.join(", ")}</h4>
        <h4 className='rating'>{restdata. avgRating}</h4>
        <h4>{restdata.costForTwo} </h4>
        <h4>{restdata.sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;