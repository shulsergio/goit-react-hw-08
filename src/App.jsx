import "./App.css";
import { Toaster } from "react-hot-toast";
import { lazy, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";

export default function App() {
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const RegistrationPage = lazy(() =>
    import("./pages/RegistrationPage/RegistrationPage")
  );
  const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
  const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("isLoggedIn in App component:", isLoggedIn);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster position="top-center" />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}
