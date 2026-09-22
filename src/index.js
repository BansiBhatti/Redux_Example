import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { SignIn } from './Admin_wireframe/SignIn';
import { Program } from './Admin_wireframe/program';
import { Application } from './Admin_wireframe/Application';
import { Agency } from './Admin_wireframe/Agency';
import { MGA } from './Admin_wireframe/MGA'
import { Commission } from './Admin_wireframe/Commission';
import { Template } from './Admin_wireframe/Template';
import { CreateApplication } from './Admin_wireframe/createApp';


const routers = createBrowserRouter([


  { path: "/", element: <SignIn /> },
  { path: "/Program", element: <Program /> },
  { path: "/Application", element: <Application /> },
  { path: "/createApp", element:<CreateApplication />} ,
  { path: "/authorized-agency", element: <Agency /> },
  { path: "/authorized-mga", element: <MGA /> },
  { path: "/commissions", element: <Commission /> },
  { path: "/proposal-template", element: <Template /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={routers} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
