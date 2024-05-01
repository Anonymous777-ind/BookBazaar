import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Carousel from "./components/Carousel/Carousel";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Team from "./pages/Team";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<App />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<Error />} />

      {/* <Route path="/forgot" element={<Register />} /> */}
    </>
  )
);

export default router;
