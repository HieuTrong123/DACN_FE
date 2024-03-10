import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import News from '../pages/News';
import Details from '../pages/Details';
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/news",
        element: <News />,
    },
    {
        path: "/details",
        element: <Details />,
    },

]);

export default Router;