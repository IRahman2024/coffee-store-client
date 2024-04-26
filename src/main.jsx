import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import CoffeeCard from './components/CoffeeCard';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AuthProvider, { AuthContext } from './components/provider/AuthProvider';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/coffeeCard",
    element: <CoffeeCard></CoffeeCard>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/login",
    element: <LogIn></LogIn>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
