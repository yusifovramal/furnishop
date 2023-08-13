
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, Spinner, ProtectedRoute } from "./components/index";
import { Suspense, lazy } from "react";
import AuthWrapper from "./components/AuthWrapper";

const Home = lazy(() => import("./pages/Home"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Error = lazy(() => import("./pages/Error"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="checkout" element={<ProtectedRoute />} page={<Checkout/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </AuthWrapper>

  );
}
export default App;
