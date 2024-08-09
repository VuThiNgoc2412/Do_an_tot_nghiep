import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layout";


const Loader = lazy(() => import("./components/loader"))
const Home = lazy(() => import("./pages/home"))
const Iphone = lazy(() => import("./pages/iphone"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="iphone" element={<Iphone />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
