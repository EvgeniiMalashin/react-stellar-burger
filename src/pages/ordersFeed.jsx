import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FeedBoard from "../components/feed-board/feed-board";
import FeedOrder from "../components/feed-order/feed-order";
import ordersFeedStyles from "./ordersFeed.module.css";
import {
  wsConnectionInit,
  wsConnectionClose,
} from "../services/actions/ws-actions-orders";

const OrdersFeed = () => {
  const orders = useSelector((store) => store.orders.orders);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(wsConnectionInit());
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (
    !!orders && (
      <div className={ordersFeedStyles.main}>
        <h2 className="text text_type_main-large mt-10 mb-5 pl-4">
          Лента заказов
        </h2>
        <div className={ordersFeedStyles.columns}>
          <FeedOrder/>
          <FeedBoard />          
        </div>
      </div>
    )
  );
};

export default OrdersFeed;