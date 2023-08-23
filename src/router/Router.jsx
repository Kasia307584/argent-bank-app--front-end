import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/PagesLayout";
import SignIn from "../pages/signin/SignInView";
import Error from "../pages/error/ErrorView";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SignIn />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
