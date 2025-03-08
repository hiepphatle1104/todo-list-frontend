import Sidebar from "@/components/Sidebar";
import { Link } from "react-router";
import {
  SidebarButton,
  LetsUseButton,
  LoginButton,
  RegisterButton,
} from "@/components/Buttons";
import { useState } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Sidebar>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="text-xl font-semibold">
            TODOAPP
          </Link>
        </div>
        <div className="navbar-end space-x-2">
          {isAuthenticated ? (
            <>
              <LetsUseButton />
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
