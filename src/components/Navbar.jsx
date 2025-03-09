import Sidebar from "@/components/Sidebar";
import { Link, useParams } from "react-router";
import {
  SidebarButton,
  LetsUseButton,
  LoginButton,
  RegisterButton,
} from "@/components/Buttons";
import { useState } from "react";
import Profile from "./Profile";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const params = useParams();

  return (
    <Sidebar>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start pl-5">
          <Link to="/" className="text-xl font-semibold">
            TODOAPP
          </Link>
        </div>
        <div className="navbar-end space-x-2">
          {isAuthenticated ? (
            <>
              {params["*"] === "board" ? <Profile /> : <LetsUseButton />}
              <SidebarButton />
            </>
          ) : (
            <>
              <LoginButton />
              <RegisterButton />
            </>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default Navbar;
