import React from "react";
import { createBrowserRouter, RouterProvider, Route, HashRouter, Routes } from "react-router-dom";
import "./App.css";
import Root from "./routes/root";
import Registration from "./routes/registration";
import Help from "./routes/help";
import Labs from "./routes/labs";
import LabOne from "./routes/labs/labOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      {/*<RouterProvider router={router} />*/}
      <HashRouter
        basename="/"
      >
        <Routes>
        <Route path="/" element={<Root />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="/labs" element={<Labs />}/>
        <Route path="/labs/1" element={<LabOne />}/>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
