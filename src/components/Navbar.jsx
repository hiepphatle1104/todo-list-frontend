import { Plus } from "lucide-react";
import { User } from "@/components";

const Navbar = ({ isAuthenticated }) => {
  return (
    <div className="navbar bg-base-200 shadow-sm px-5">
      <h1 className="navbar-start text-xl font-semibold">TODOAPP</h1>
      <div className="navbar-center">
        <div role="tablist" className="tabs tabs-border">
          <a role="tab" className="tab tab-active">
            Board
          </a>
          <a role="tab" className="tab">
            List
          </a>
          <a role="tab" className="tab">
            Status
          </a>
        </div>
      </div>
      <div className="navbar-end space-x-2">
        {isAuthenticated ? (
          <>
            <div className="avatar-group -space-x-5">
              <div className="avatar">
                <div className="w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-10">
                  <span>+99</span>
                </div>
              </div>
            </div>
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
