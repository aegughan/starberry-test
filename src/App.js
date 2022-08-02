import "./App.css";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/searchPage" component={SearchPage} />
        <Route exact path="/detailPage" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
