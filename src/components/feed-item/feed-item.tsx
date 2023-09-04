import feedItemStyles from "./feed-item.module.css";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "../../utils/hooks";
import { addCurrentOrder } from "../../services/actions/order";
import { TItem, TOrder, TOrderItem } from "../../utils/types/types";

const FeedItem: React.FC<TOrderItem> = ({ order, path }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const orderIngredients = order.ingredients;
  const findIngredient = orderIngredients.map((id) => ingredients.filter((ingr: TItem) => ingr._id === id)[0]);
  const orderPrice = findIngredient.filter((el) => el !== undefined).reduce((total, ingredient) => total + ingredient.price, 0);
  const clickHandler = (order: TOrder) => { dispatch(addCurrentOrder(order)); };

  return (
    <div className={feedItemStyles.item}>
      <Link
        className={feedItemStyles.link}
        to={{ pathname: path }}
        onClick={() => clickHandler(order)}
        state={{ background: location }}
      >
        <div className={feedItemStyles.item__info}>
          <p className="text text_type_digits-default">#{order.number}</p>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} />
          </p>
        </div>
        <h4
          className={`${feedItemStyles.item__name} text text_type_main-default mb-6 mt-6`}
        >
          {order.name}
        </h4>

        {path === `/profile/orders/${order._id}` ? (
          <p
            className={`${feedItemStyles.status} text text_type_main-small mb-15`}
            style={{ color: order.status === "done" ? "#00CCCC" : "white" }}
          >
            {order.status === "done" ? "Выполнен" : "Готовится"}
          </p>
        ) : null
        }
        <div className={feedItemStyles.item__summary}>
          <div className={feedItemStyles.pictos}>
            {findIngredient
              .filter((el) => el !== undefined)
              .map((item, index) =>
                index < 6 ? (
                  <div className={feedItemStyles.imageContainer} key={index}>
                    <img
                      src={item.image}
                      className={feedItemStyles.itemImg}
                      alt={item.name}
                    />
                  </div>
                ) : null
              )}
          </div>
          <div className={feedItemStyles.total}>
            {" "}
            <p className="text text_type_digits-default ml-6 mr-1">
              {orderPrice}
            </p>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeedItem;