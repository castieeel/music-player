import { Search } from "./Search";
import { Filter } from "./Filter";
import { Content } from "./content/Content";
export const Centerblock = () => {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <Content />
    </div>
  );
};
