import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import NavBar from '../../Components/NavBar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './index.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/dv-shopp/', element: <Home />},
    {path: '/dv-shopp/clothes', element: <Home />},
    {path: '/dv-shopp/electronics', element: <Home />},
    {path: '/dv-shopp/furnitures', element: <Home />},
    {path: '/dv-shopp/toys', element: <Home />},
    {path: '/dv-shopp/others', element: <Home />},
    {path: '/dv-shopp/my-account', element: <MyAccount />},
    {path: '/dv-shopp/my-order', element: <MyOrder />},
    {path: '/dv-shopp/my-orders', element: <MyOrders />},
    {path: '/dv-shopp/my-orders/last', element: <MyOrder />},
    {path: '/dv-shopp/my-orders/:id', element: <MyOrder />},
    {path: '/dv-shopp/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ])
  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;
