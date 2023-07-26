import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main";
import { Login } from "./pages/login";
import { RegistrationPage } from "./pages/signup";
import { FavouritesPage } from "./pages/favourites";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PlaylistPage } from "./pages/playlist";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
