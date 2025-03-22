import { Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";

export default function AppRouting() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
