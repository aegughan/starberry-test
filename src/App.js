import "./App.css";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <div className="text_center header">Header Section</div>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/detailPage" component={DetailPage} />
      </Switch>
      <div className="text_center footer">Footer Section</div>
    </div>
  );
}

export default App;
