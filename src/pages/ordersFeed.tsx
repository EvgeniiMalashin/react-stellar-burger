import { useSelector, useDispatch } from "../utils/hooks";
import { useEffect } from "react";
import FeedBoard from "../components/feed-board/feed-board";
import FeedOrder from "../components/feed-order/feed-order";
import ordersFeedStyles from "./ordersFeed.module.css";
import { wsConnectionInit, wsConnectionClose } from "../services/actions/ws-actions-orders";


const OrdersFeed: React.FC = (): JSX.Element | null => {
  const orders = useSelector((store) => store.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionInit());
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return orders ? (
    <div>
      <h2 className="text text_type_main-large mt-10 mb-5 pl-4">
        Лента заказов
      </h2>
      <div className={ordersFeedStyles.columns}>
        <FeedOrder />
        <FeedBoard />
      </div>
    </div>
  ) : null;
};

export default OrdersFeed;