import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layout";


const Loader = lazy(() => import("./components/loader"))
const Home = lazy(() => import("./pages/home"))
const Iphone = lazy(() => import("./pages/iphone"))
const ProductDetail = lazy(() => import("./pages/product-detail"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route>
              <Route path="/iphone" element={<Iphone />} />
              <Route path="/iphone/:id" element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<Loader />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
