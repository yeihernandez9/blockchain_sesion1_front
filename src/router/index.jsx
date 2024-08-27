import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import LayoutPublic from "../layouts/LayoutPublic";
import NotFound from "../pages/notFound/NotFound";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <LayoutPublic />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },{
                path : "/about",
                element : <About />
            },
            {
                path : "/blog",
                element : <Blog />
            }
        ]
        
    }
])