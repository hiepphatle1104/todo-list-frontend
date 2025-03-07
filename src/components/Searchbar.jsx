import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <label className="input bg-base-200">
      <Search size={20} />
      <input type="search" className="grow" placeholder="Search items..." />
    </label>
  );
};

export default Searchbar;
