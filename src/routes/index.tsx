import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import PrivateRoute from "./privateRoute";

import Home from "pages/Home";
import Browse from "pages/Browse";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Home />} />
        <Route
          element={
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          }
        >
          <Route path="/browse" element={<Browse />}>
            {/* <Route
              path="/private-routes"
              element={<div>Your private routes here!</div>}
            /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
