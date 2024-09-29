import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import {
    createBrowserRouter,
    Outlet,
    ScrollRestoration,
} from "react-router-dom";
import Sign from "./pages/Sign/Sign";

const Root = () => {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/sign",
                element: <Sign />,
            }
        ],
    },
]);

export default router