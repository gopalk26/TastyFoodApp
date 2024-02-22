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
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import CartPage from './Components/CartPage';
import Footer from './Components/Footer';

const AppLayout = () => {
  return (
    <Provider store ={appStore}>
   <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
    
    </div>
    </Provider>
    
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
      },
      {
         path:"/cartpage",
         element:<CartPage/>
      },

    ],
    errorElement:<Error/>,
    
    
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={approuter} />);
