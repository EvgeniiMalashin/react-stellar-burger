import feedBoardStyle from "./feed-board.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../../services/store";
import { TOrder } from "../../utils/types/types";



function FeedBoard() {
  const orders = useSelector((store:RootState) => store.orders.orders.orders);
  const total = useSelector((store: RootState) => store.orders.orders.total);
  const totalToday = useSelector((store: RootState) => store.orders.orders.totalToday);

  const findOrdersByStatus = (arr: any) => {
    return arr?.reduce(
      (acc: any, curr: any) => {
        curr.status === "done"
          ? (acc["done"] = [...acc["done"], curr])
          : (acc["pending"] = [...acc["pending"], curr]);
        return acc;
      },
      { done: [], pending: [] }
    );
  };

  const statusArray = useMemo(() => findOrdersByStatus(orders), [orders]);
  
  return (
    <div className={`${feedBoardStyle.container}`}>
      <div className={`${feedBoardStyle.container_list}`}>
        <h3 className={`${feedBoardStyle.title} text text_type_main-medium`}>
          Готовы:
        </h3>
        <ul className={`${feedBoardStyle.list_numbers}`}>
          {statusArray
            ? statusArray.done.map((order: TOrder, i: string) => (
              <li
                className={`${feedBoardStyle.number} text text_type_digits-default`}
                key={i}
              >
                {order.number}
              </li>
            ))
            : null}
        </ul>
      </div>
      <div className={`${feedBoardStyle.container_list}`}>
        <h3 className={`${feedBoardStyle.title} text text_type_main-medium`}>
          В работе:
        </h3>
        <ul className={`${feedBoardStyle.list_numbers}`}>
          {statusArray
            ? statusArray.pending.map((order: TOrder, i: string) => (
              <li className={`text text_type_digits-default`} key={i}>
                {order.number}
              </li>
            ))
            : null}
        </ul>
      </div>
      <div className={`${feedBoardStyle.full}`}>
        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
        <p
          className={`${feedBoardStyle.number_large} text text_type_digits-large`}
        >
          {total}
        </p>
      </div>
      <div className={`${feedBoardStyle.today}`}>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p
          className={`${feedBoardStyle.number_large} text text_type_digits-large`}
        >
          {totalToday}
        </p>
      </div>
    </div>
  );
}

export default FeedBoard;