import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Error from './components/Error/Error';




const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      path: "/about-me",
      element: <AboutMe />
    }

  ]
}], {
  // basename: "/App"
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

