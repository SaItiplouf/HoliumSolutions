import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageIndex from "./components/Pages/PageIndex";
import PageContact from "./components/Pages/PageContact";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageIndex />,
  },
  {
    path: "/contact",
    element: <PageContact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
