import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import Carousel from "./components/Carousel/Carousel";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="home" element={<Carousel/>}/>
        </Route>
    )
);

export default router;