import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Carousel from "./components/Carousel/CarouselSlides";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import ProductOverview from "./pages/ProductOverview";
import ContactUs from "./pages/ContactUs";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<App />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path ="/contactus" element={<ContactUs/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/overview" element={<ProductOverview />} />
      
      <Route path="*" element={<Error />} />

      {/* <Route path="/forgot" element={<Register />} /> */}
    </>
  )
);

export default router;
