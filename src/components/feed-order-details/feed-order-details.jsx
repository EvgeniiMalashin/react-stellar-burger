import {
    CurrencyIcon,
    FormattedDate,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useSelector } from "react-redux";
  import styles from "./feed-order-details.module.css";
  import { useParams, useMatch } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { v4 as uuidv4 } from "uuid";
  import { useEffect } from "react";
  import { wsConnectionInit } from "../../services/actions/ws-actions-orders";
  import { useState } from "react";
  import {
    wsProfileConnectionClose,
    wsProfileConnectionInit,
  } from "../../services/actions/ws-actions-profile-orders";
  
  const FeedOrderDetails = ({ orderPrice }) => {
    const dispatch = useDispatch();
    const orderCurrent = useSelector((store) => store.current.currentOrder);
    const { ingredients } = useSelector((store) => store.ingredients);
    const ordersAll = useSelector((store) => store.orders.orders);
    const ordersAuth = useSelector((store) => store.profileOrders.profileOrders);
    const orders = ordersAll || ordersAuth;
    const { id } = useParams();
    const [sortedIngredients, setSortedIngredients] = useState(null);
    const [order, setOrder] = useState(null);
    // const { path } = useMatch();
    const feedPath = useMatch("/feed/:id");
    const profilePath = useMatch("/profile/orders/:id");
  
    useEffect(() => {
      if (orders) {
        const orderFind = orders.orders.find((i) => i._id === id);
        const order = orderCurrent ? orderCurrent : orderFind;
        const findIngredient = order.ingredients.map(
          (id) => ingredients.filter((item) => item._id === id)[0]
        );
        const sortedIngredients = [];
        findIngredient.map((ingr) => {
          const isLocated =
            sortedIngredients.filter((el) => el.item._id === ingr._id).length !==
            0;
          if (!isLocated) {
            sortedIngredients.push({
              item: ingr,
              count: findIngredient.filter((item) => item._id === ingr._id)
                .length,
            });
          }
        });
        setOrder(order);
        setSortedIngredients(sortedIngredients);
      }
    }, [orderCurrent, orders]);
  
    useEffect(() => {
      feedPath && dispatch(wsConnectionInit());
      profilePath && dispatch(wsProfileConnectionInit());
      return () => {
        feedPath && dispatch(wsProfileConnectionClose());
        profilePath && dispatch(wsProfileConnectionClose());
      };
    }, []);
  
    return order ? (
      <div className={styles.orderInfo__section}>
        <p
          className={`${styles.orderInfo__number} text text_type_digits-default`}
        >
          #{order.number}
        </p>
        <h3
          className={`${styles.orderInfo__name} text text_type_main-default mb-3`}
        >
          {order.name}
        </h3>
        <p
          className={`${styles.orderInfo__status} text text_type_main-small mb-15`}
          style={{ color: order.status === "done" ? "#00CCCC" : "white" }}
        >
          {order.status === "done" ? "Выполнен" : "Готовится"}
        </p>
        <p className="text text_type_main-medium mb-6">Состав:</p>
        <div className={styles.orderInfo__ingredients}>
          {sortedIngredients.map((ingredient) => (
            <div className={styles.orderInfo__ingredient} key={uuidv4()}>
              <div className={styles.orderInfo__ingredientName}>
                <img
                  className={`${styles.orderInfo__ingredientImg} mr-4`}
                  src={ingredient.item.image}
                  alt={ingredient.item.name}
                />
                <h4 className="text text_type_main-default">
                  {ingredient.item.name}
                </h4>
              </div>
              <div className={styles.orderInfo__quantity}>
                <p className="text text_type_digits-default mr-3">
                  {`${ingredient.count} x ${ingredient.item.price}`}
                </p>
                <CurrencyIcon />
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.orderInfo__info} mt-10`}>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} />
          </p>
          <div className={styles.orderInfo__quantity}>
            <p className="text text_type_digits-default mr-2">{orderPrice}</p>
            <CurrencyIcon />
          </div>
        </div>
      </div>
    ) : null;
  };
  
  export default FeedOrderDetails;