import FeedOrderDetails from "../components/feed-order-details/feed-order-details";
import feedOrderStyles from "./feedOrder.module.css"

const FeedOrder: React.FC = (): JSX.Element | null => {
  return (
    <div className={feedOrderStyles.main}>      
      <FeedOrderDetails />
    </div>
  )
}

export default FeedOrder;