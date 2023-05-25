import orderDetailsStyle from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {number} from "prop-types";

function OrderDetails({orderNumber}) {
    return (
      <div className={orderDetailsStyle.container}>
        <h2 className={`${orderDetailsStyle.number} text text_type_digits-large`}>{orderNumber}</h2>
        <p className="text text_type_main-medium">Идентификатор заказа</p>
        <div className={orderDetailsStyle.check}>
          <CheckMarkIcon type="primary"/> 
        </div>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    )
  }
  OrderDetails.propTypes = {
    orderNumber: number.isRequired
}
  export default OrderDetails;