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
        loader: ()=> fetch('/gadgetData.json')
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>
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
  </StrictMode>
);
