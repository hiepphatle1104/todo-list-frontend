import { AlignJustify } from "lucide-react";

const Sidebar = ({ children }) => {
  return (
    <div className="drawer drawer-end z-99">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
          <li>
            <h2 className="menu-title">Menu</h2>
            <ul>
              <li>
                <a href="/profile">Profile</a>
              </li>
              {/* <li>
                <a>Settings</a>
              </li> */}
            </ul>

            <h2 className="menu-title">Views</h2>
            <ul>
              <li>
                <a href="/board">Board</a>
              </li>
              {/* <li>
                <a>List</a>
              </li>
              <li>
                <a>Status</a>
              </li> */}
            </ul>
          </li>
          <li className="mt-auto">
            <a href="/logout" className="btn btn-soft max-lg:btn-sm">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
