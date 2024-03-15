import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./header/header";

export const Layout = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};
