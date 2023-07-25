import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import initStore from "./services/store";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={initStore}>
    <Router>
      <App />
    </Router>
  </Provider>
);
reportWebVitals();
