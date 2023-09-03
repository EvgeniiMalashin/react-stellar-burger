import orderDetailsStyle from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";



function OrderDetails() {
  const orderNumber = useSelector((store) => store.order.orderNumber);

  return (
    <div className={orderDetailsStyle.container}>

    {orderNumber ? (
        <h2 className={`${orderDetailsStyle.number} text text_type_digits-large`}>{orderNumber}</h2>
      ) : (
        <div className={orderDetailsStyle.loaderContainer}>
          <div className={`${orderDetailsStyle.loader} mb-6`}></div>
        </div>
      )}

      
      <p className="text text_type_main-medium">Идентификатор заказа</p>
      <div className={orderDetailsStyle.check}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;