import { Plus } from "lucide-react";
import { User } from "@/components";

const Navbar = ({ isAuthenticated }) => {
  // todo: add register and login pages
  // todo: add member feature

  return (
    <div className="navbar bg-base-200 shadow-sm px-5">
      <h1 className="navbar-start text-xl font-semibold">TODOAPP</h1>
      <div className="navbar-end space-x-2">
        {isAuthenticated ? (
          <>
            <button className="btn btn-ghost">
              <Plus size={20} />
              New Member
            </button>
            <User />
          </>
        ) : (
          <>
            <button className="btn btn-soft">Login</button>
            <button className="btn btn-neutral">Register</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
