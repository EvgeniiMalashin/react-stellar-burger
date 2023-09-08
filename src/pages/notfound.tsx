import { Link } from 'react-router-dom';
import notfoundStyles from './notfound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={notfoundStyles.box}>
      <p className={notfoundStyles.text}>К сожалению, страница по введенному вами адресу не существует или еще не готова. Хотите вернуться на
        <Link to='/' className={notfoundStyles.link}>главную?</Link>
      </p>
    </div>
  );
}

export default NotFound;