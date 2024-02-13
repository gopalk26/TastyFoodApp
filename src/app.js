import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import RestaurantCard from './Components/RestaurantCard ';
import { createBrowserRouter ,Outlet,RouterProvider,Outlet } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      
    
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },

      {
        path:"/about",
        element:  <About/>,
      },
      {
       path:"/contact",
       element:<Contact/>,
      },
      {
        path:"/restmenu/:resId",
        element:<RestaurantMenu/>,
      }

    ],
    errorElement:<Error/>,
    
    
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={approuter} />);
