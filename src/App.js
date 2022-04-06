import { BrowserRouter, Route, Link } from "react-router-dom";
import Com1 from "./compoo/compo";
import Com2 from "./compoo/compo2";
import Vid from "./compoo/vid";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/one">
        <Com1></Com1>
        </Route>
        <Route exact path="/">
        <Vid></Vid>
        </Route>
        <Route exact path="/two">
        <Com2></Com2>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
