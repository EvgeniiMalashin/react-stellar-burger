import feedOrderStyles from "./feed-order.module.css";
import FeedItem from "../feed-item/feed-item";
import { useSelector } from "../../utils/hooks";
import { TOrder } from "../../utils/types/types";

const FeedOrder = () => {
  const orders = useSelector((store) => store.orders.orders?.orders) || [];
  
  return (
    <div className={feedOrderStyles.feed}>
      {orders.map((order: TOrder) => (
        <FeedItem key={order._id} order={order} path={`/feed/${order._id}`}/>
      ))}
    </div>
  );
};

export default FeedOrder;