import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import App from './pages/App';
import ErrorPage from "./pages/error-page";
import Single from "./pages/Single";
import Book from './pages/Book';
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { AuthProvider } from './context/AuthProvider';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DarkModeProvider } from './context/DarkModeContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "experiences/:experienceId",
    element: <Single />,
  },
  {
    path: "experiences/:experienceId/book",
    element: <Book />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <DarkModeProvider>
      <RouterProvider router={router}/>
    </DarkModeProvider>
    </AuthProvider>
  </React.StrictMode>
);

// mapping exercices
// const nums = [1, 2, 3, 4, 5]
// const squared = nums.map(num => num * num)
// console.log(squared)

// const names = ["Louis", "Andrew", "Mila", "Joan", "Romy"]
// const capitalized = names.map(name => `${name[0].toUpperCase()}${name.slice(1)}`)
// console.log(capitalized)

// const pokemons = ["Bulbasseur", "Charmander", "Squirtle"]
// pokemons.map((pokemon) => {
//   console.log(`<p>${pokemon}<p/>`)
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
