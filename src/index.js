import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { StateManagement } from './statemenagement';
import store from './store';
import { Provider } from 'react-redux';

const routers = createBrowserRouter([
  { path: "/", element: <StateManagement /> },
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
