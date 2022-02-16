import Product from "./pages/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  const user = true;
  return (
     <AuthProvider>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home />}>
        </Route>
        <Route path = "/products" element={<ProductList />}>
        </Route>
        <Route path = "/products/:id" element={<Product />}>
        </Route>
        <Route path = "/products/:category" element={<ProductList />}>
        </Route>
        <Route path = "/cart/" element={<Cart />}>
        </Route>
        <Route path = "/success" element={<Success />}>
        </Route>
        <Route path = "/login" element={<Login />}>
          {/* {user? <Navigate to = "/"/>: <Login/>} */}
        </Route>
        <Route path = "/register" element={<Register />}>
        </Route>
        <Route path = "/signup" element={<Register />}>
        </Route>
        </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;