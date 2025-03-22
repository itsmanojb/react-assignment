import { Navigate, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import UsersOverview from "./pages/UsersOverview";
import PageNotFound from "./pages/PageNotFound";

export default function AppRouting() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/users-overview" replace />} />
        <Route path="users-overview" element={<UsersOverview />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
