import styles from "./feed-order.module.css";
import FeedItem from "../feed-item/feed-item";
import { useSelector } from "react-redux";

const FeedOrder = () => {
  const orders = useSelector((store) => store.orders.orders);
  
  return (
    <div className={styles.feed}>
      {orders.orders.map((order) => (
        <FeedItem key={order._id} order={order} path={`/feed/${order._id}`}/>
      ))}
    </div>
  );
};

export default FeedOrder;