import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Root";

import MainPage from "./MainPage/MainPage";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <MainPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
