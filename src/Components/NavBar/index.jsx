import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import ShoppingCart from "../ShoppingCart";
import logo from "../../assets/DVShark.svg";

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  
  const isUserSignOut = context.signOut;

  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const handleSignOut = () => {
    const stringfiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringfiedSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li>
          <NavLink
            to="/dv-shopp/sign-in/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          <li>
            <span className="hidden sm:flex text-sm">
              {parsedAccount?.email}
            </span>
          </li>
          <li>
            <NavLink
              to="/dv-shopp/my-account/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dv-shopp/my-orders/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dv-shopp/"
              onClick={() => handleSignOut()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign out
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="flex items-center fixed z-10 top-0 w-full h-16 text-sm font-light border-b-2 nav-bar px-4 justify-between">
      <div className="flex">
        <img src={logo} alt="logo" className="w-16 h-16 object-containt" />
        <h1 className="font-semibold text-lg flex items-center">
          <NavLink
            to='/dv-shopp/'
            onClick={() => context.setSearchByCategory()}
          >
            DV-Shopp
          </NavLink>
        </h1>
        <p
          className="cursor-pointer md:hidden place-self-center ml-4"
          onClick={() => {
            context.isCategoriesMenuOpen
              ? context.closeCategoriesMenu()
              : context.openCategoriesMenu();
          }}
        >
          Categories
        </p>
        <div
          className={`${context.isCategoriesMenuOpen ? "relative" : "flex"}`}
        >
          <ul
            className={`
                        ${
                          context.isCategoriesMenuOpen
                            ? "absolute -left-20 top-12 bg-white p-2 rounded-lg"
                            : "hidden"
                        } md:flex items-center gap-3 ml-4`}
          >
            <li>
              <NavLink
                to="/dv-shopp/"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                onClick={() => context.setSearchByCategory()}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dv-shopp/clothes"
                onClick={() => context.setSearchByCategory("clothes")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dv-shopp/electronics"
                onClick={() => context.setSearchByCategory("electronics")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Electronic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dv-shopp/furnitures"
                onClick={() => context.setSearchByCategory("furnitures")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dv-shopp/toys"
                onClick={() => context.setSearchByCategory("toys")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dv-shopp/others"
                onClick={() => context.setSearchByCategory("others")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Others
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <ul className="flex gap-2">
        {renderView()}
        <li className="flex items-center cursor-pointer">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
