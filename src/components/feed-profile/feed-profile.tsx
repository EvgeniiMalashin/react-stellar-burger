import feedProfileStyles from "./feed-profile.module.css";
import FeedItem from "../feed-item/feed-item";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { wsProfileConnectionInit, wsProfileConnectionClose } from "../../services/actions/ws-actions-profile-orders";
import { RootState } from "../../services/store";
import { TOrder } from "../../utils/types/types";

const FeedProfile = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store: RootState) => store.profileOrders.profileOrders);
  const [ordersReverse, setOrdersReverse] = useState<TOrder[]>([]);
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

  return (
    <div className={feedProfileStyles.feed}>
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