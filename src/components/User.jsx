import { Link } from "react-router";

const User = () => {
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end cursor-pointer">
        <div tabIndex={0} role="button" className="select-none">
          <div className="avatar avatar-placeholder w-10">
            <div className="bg-neutral text-neutral-content w-full rounded-full">
              <span className="text-xl">D</span>
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a href="/profile">Profile</a>
          </li>

          <li>
            <a href="/settings">Settings</a>
          </li>
          <div className="divider my-1"></div>
          <li>
            <a href="/logout" className="btn w-full btn-sm">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default User;
