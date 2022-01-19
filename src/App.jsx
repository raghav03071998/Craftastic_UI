import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return(
  <Router>
    <Routes>
          <Route path="/signup" element = {<Product/>}>
          </Route>
          <Route path="/signin" element = {<ProductList/>}>
          </Route>
          <Route path="/" element = {<Home/>}>
          </Route>
        </Routes>
    </Router>
  )
};

export default App;