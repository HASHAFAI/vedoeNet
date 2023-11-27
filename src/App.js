import "./App.css";
import Home from "./component/Home";
import DescriptionProduct from "./component/DescriptionProduct";
import Cart from "./component/Cart";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import {
  DataCartProvider,
  DataProvider,
  TostProvider,
} from "./context/dataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllProducts from "./component/AllProducts";
import ScrollToTop from "./component/ScrollToTop";
import NotFound from "./component/NotFound";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <DataCartProvider>
          <TostProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Nav />
              <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/home" exact Component={Home} />
                <Route path="/product">
                  <Route
                    path="details/:IdProduct"
                    Component={DescriptionProduct}
                  />
                  <Route path="all" Component={AllProducts} />
                </Route>
                <Route path="/cart" Component={Cart} />
                <Route path="*" Component={NotFound} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </TostProvider>
        </DataCartProvider>
      </DataProvider>
    </div>
  );
}

export default App;
