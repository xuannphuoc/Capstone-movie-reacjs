import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminTemplate from "./pages/AdminTemplates";
import HomeTemplate from "./pages/HomeTemplates";
import HomePage from "./pages/HomeTemplates/HomePage";
import AboutPage from "./pages/HomeTemplates/AboutPage";
import ListMoviePage from "./pages/HomeTemplates/ListMoviePage";
import DashboardPage from "./pages/AdminTemplates/DashboardPage";
import AddUserPage from "./pages/AdminTemplates/AddUserPage";
import DetailPage from "./pages/HomeTemplates/DetailPage";
import AuthenPage from "./pages/AdminTemplates/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomeTemplate */}
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="list-movie" element={<ListMoviePage />}></Route>
          <Route path="detail/:id" element={<DetailPage />}></Route>
        </Route>

        {/* AdminTemplate */}
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="add-user" element={<AddUserPage />}></Route>
        </Route>

        <Route path="auth" element={<AuthenPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
