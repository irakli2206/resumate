import { NextUIProvider } from '@nextui-org/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import './index.scss'
import Root from './layouts/Root';
import Home from './pages/Home';
import theme from './theme';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
