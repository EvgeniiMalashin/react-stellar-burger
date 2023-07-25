import styles from "./feed-item.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedOrderDetails from "../feed-order-details/feed-order-details";
import Modal from "../modal/modal";
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCurrentOrder,
  addCurrentOrder,
} from "../../services/actions/order";
import { v4 as uuidv4 } from "uuid";

const FeedItem = ({ order, path }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const ingredients = useSelector((store) => store.ingredients.ingredients);
    const orderIngredients = order.ingredients;

    const findIngredient = orderIngredients.map(
        (id) => ingredients.filter((ingr) => ingr._id === id)[0]
      );

      const orderPrice = findIngredient
    .filter((el) => el !== undefined)
    .reduce((total, ingredient) => total + ingredient.price, 0);

    const clickHandler = (order) => {
        dispatch(addCurrentOrder(order));
        setIsOpen(true);
      };

    return (
    
        <div className={styles.item}>
        <Link
          className={styles.link}
          to={{ pathname: path }}
          onClick={() => clickHandler(order)}
        >
          <div className={styles.item__info}>
            <p className="text text_type_digits-default">#{order.number}</p>
            <p className="text text_type_main-default text_color_inactive">
              <FormattedDate date={new Date(order.createdAt)} />
            </p>
          </div>
          <h4
            className={`${styles.item__name} text text_type_main-default mb-6 mt-6`}
          >
            {order.name}
          </h4>
          <div className={styles.item__summary}>
            <div className={styles.pictos}>
              {findIngredient
                .filter((el) => el !== undefined)
                .map((item, index) =>
                  index < 6 ? (
                    <div className={styles.imageContainer} key={uuidv4()}>
                      <img
                        src={item.image}
                        className={styles.itemImg}
                        alt={item.name}
                      />
                    </div>
                  ) : null
                )}
            </div>
            <div className={styles.total}>
              {" "}
              <p className="text text_type_digits-default ml-6 mr-1">
                {orderPrice}
              </p>
              <CurrencyIcon />
            </div>
          </div>
        </Link>
    </div>
    )
}

 export default FeedItem;