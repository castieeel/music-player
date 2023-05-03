import { Personal } from "./Personal";
import { Block } from "./Block";
export const Sidebar = () => {
  return (
    <div className="main__sidebar sidebar">
      <Personal />
      <Block />
    </div>
  );
};
