import styles from "./feed-profile.module.css";
import FeedItem from "../feed-item/feed-item";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { wsProfileConnectionInit, wsProfileConnectionClose } from "../../services/actions/ws-actions-profile-orders";


const FeedProfile = () => {
  const dispatch = useDispatch();  
  const orders = useSelector((store) => store.profileOrders.profileOrders);
  const [ordersReverse, setOrdersReverse] = useState([]);
  useEffect(() => {
    if (orders) {
      const reverse = orders.orders.reverse();
      setOrdersReverse(reverse);
    }
  }, [orders]);

  useEffect(() => {
    dispatch(wsProfileConnectionInit());
    return () => {
      dispatch(wsProfileConnectionClose());
    };
  }, [dispatch]);
  console.log(orders)
  return (
    <div className={styles.feed}>
      {orders ? (
        <>
          {ordersReverse.map((order) => (
            <FeedItem
              order={order}
              path={`/profile/orders/${order._id}`}
              key={order._id}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default FeedProfile;