import FeedOrderDetails from "../components/feed-order-details/feed-order-details";
import feedOrderStyles from "./feedOrder.module.css"

const FeedOrder = () => {
  return (
    <div className={feedOrderStyles.main}>      
      <FeedOrderDetails />
    </div>
  )
}

export default FeedOrder;