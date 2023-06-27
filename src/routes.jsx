import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Playlist } from "./pages/playlist";
import { Registration } from "./pages/registration";
import { Set } from "./pages/set";
import { NotFound } from "./pages/not-found";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/set" element={<Set />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
