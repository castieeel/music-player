import { Nav } from "./nav/Nav";
import { Centerblock } from "./centerblock/Centerblock";
import { Sidebar } from "./sidebar/Sidebar";
export const Main = () => {
  return (
    <main className="main">
      <Nav />
      <Centerblock />
      <Sidebar />
    </main>
  );
};
