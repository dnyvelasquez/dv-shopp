import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import logo from "../../assets/DVShark.svg";

const NavBar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex items-center fixed z-10 top-0 w-full text-sm font-light border-b-2 justify-between nav-bar px-4">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg flex items-center">
                    <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
                    <NavLink 
                        to='/dv-shopp/'
                        onClick={() => context.setSearchByCategory()}
                        >
                        DV-Shopp
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/dv-shopp/' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => context.setSearchByCategory()}
                    >
                        All
                    </NavLink></li>
                <li>
                    <NavLink 
                        to='/dv-shopp/clothes' 
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}                        
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/dv-shopp/electronics' 
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Electronic
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/dv-shopp/furnitures' 
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/dv-shopp/toys' 
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/dv-shopp/others' 
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    <a href="mailto:dny.velasquez@gmail.com">
                        dny.velasquez@gmail.com
                    </a>
                </li>
                <li>
                    <NavLink to='/dv-shopp/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My orders
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign in
                    </NavLink>
                </li> */}
                <li 
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                        context.openCheckoutSideMenu();
                        context.closeProductDetail();                    
                    }}
                >
                    <ShoppingBagIcon className="h-6 w-6 text-black"/>
                    <div>{context.cartProducts.length}</div>                    
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;