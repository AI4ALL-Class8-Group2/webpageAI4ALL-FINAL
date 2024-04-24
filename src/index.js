import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chart1 from './pages/Chart1'
import Chart2 from './pages/Chart2'
import Chart3 from './pages/Chart3'
import Chart4 from './pages/Chart4'
import Chart5 from './pages/Chart5'
import ROCYOUDEN from './pages/ROCYOUDEN'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
  {
    path: "Chart1",
    element: <Chart1/>,
  },

  {
    path: "Chart2",
    element: <Chart2/>,
  },

  {
    path: "Chart3",
    element: <Chart3/>,
  },

  {
    path: "Chart4",
    element: <Chart4/>,
  },

  {
    path: "Chart5",
    element: <Chart5/>,
  },

  {
    path: "ROCYOUDEN",
    element: <ROCYOUDEN/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
