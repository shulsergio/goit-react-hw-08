import "./App.css";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
  const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
