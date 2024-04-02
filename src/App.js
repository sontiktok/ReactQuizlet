import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div>Test Link</div>
      <div>
        <button>
          <Link to="/users">Cick user</Link>
        </button>
        <button>
          <Link to="/admin">Cick admin</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
