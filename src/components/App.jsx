import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import TeachersPage from "../pages/teachers/TeachersPage";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
