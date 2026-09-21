import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import { App } from './App';
// import Products from './Products';
// import Pricing from './Pricing';
// import Blog from './Blog';
// import Contact from './Contact';
// import Service from './Service';
// import About from './About';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
// import { AntdForm } from './antd';
// // import { StateManagement } from './statemenagement';
// import { SingupPage } from './Singup';
// import { LoginPage } from './Login';
// import { Dashboard } from './Dashboard';

// import { SignIn } from './Admin_wireframe/SignIn';
// import { Program } from './Admin_wireframe/program';
// import { Application } from './Admin_wireframe/Application';
// import { Agency } from './Admin_wireframe/Agency';
// import { MGA } from './Admin_wireframe/MGA'
// import { Commission } from './Admin_wireframe/Commission';
// import { Template } from './Admin_wireframe/Template';
// import { CreateApplication } from './Admin_wireframe/createApp';

// import ClassComponent from './ClassComponent';
// import { MaterialUI } from './MaterialUI';
// import { Fusion } from './Fusion';
// import DataByAPI from './api';

import store from './store';
import { Provider } from 'react-redux';
// import { StateManagement } from './statemenagement';

// import UserContext from "./UserContext";
// import HomeContext from "./HomeContext";
import "./app.css"
import { SingupBackend } from "./Singup_Backend";
import { LoginBackend } from "./Login_Backend"


const routers = createBrowserRouter([

  { path: "/", element: <LoginBackend /> },

  // { path: "/", element: <SingupPage /> },
  // { path: "/", element: <SignIn /> },
  // { path: "/Program", element: <Program /> },
  // { path: "/Application", element: <Application /> },
  // { path: "/createApp", element:<CreateApplication />} ,
  // { path: "/authorized-agency", element: <Agency /> },
  // { path: "/authorized-mga", element: <MGA /> },
  // { path: "/commissions", element: <Commission /> },
  // { path: "/proposal-template", element: <Template /> },


  { path: "/Singup", element: <SingupBackend /> },
  // { path: "/dashboard", element: <Dashboard /> }
  // { path: "/products", element: <Products /> },
  // { path: "/pricing", element: <Pricing /> },
  // { path: "/blog", element: <Blog /> },
  // { path: "/contact", element: <Contact /> },
  // { path: "/service", element: <Service /> },     
  // { path: "/about", element: <About /> },   
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={routers} />

  </Provider>
  // <UserContext.Provider value={"bansi"}>
  //   <HomeContext />
  // </UserContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
