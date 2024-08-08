import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { lazy, Suspense } from "react";


const Loader = lazy(() => import("./components/loader"))
const Home = lazy(() => import("./pages/home"))

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
