import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import GadgetsDetails from './Components/GadgetsDetails/GadgetsDetails.jsx';
import CartList from './Components/CartList/CartList.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,

  },
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: 'gadgets/:gadgetsId',
        element: <GadgetsDetails></GadgetsDetails>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>,
         loader: () => fetch('/gadgetData.json')
      },
      {
        path: 'cartList',
        element: <CartList></CartList>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: 'Dashboard',
        element: <Dashboard></Dashboard>
      },
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>
);
