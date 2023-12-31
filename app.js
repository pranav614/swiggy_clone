import React,{ Suspense, useEffect } from 'react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client'; 
import Body from './components/Body';
import Header from './components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Menu from './components/Menu';
import myStore from './utils/myStore'
import { Outlet } from 'react-router-dom';
import RestaurantCart from './components/RestaurantCart';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import { useMediaQuery } from "react-responsive";
import MobileHeader from './components/Header/MobileHeader';



const Grocery=React.lazy(()=>{
  return import('./components/Grocery');
})
const MainComponent=()=>{
  const largerScreen=useMediaQuery({minWidth:768});
  const [userData,setUserData]=useState();
  
  useEffect(()=>{
    const data=({
      userName:'Pranav',
    })
    setUserData(data.userName)
  },[])

    return (
      <Provider store={myStore}>
      <UserContext.Provider value={{loginUser:userData,setUserData}}>
      <div>
      {largerScreen ? <Header /> : <MobileHeader />}
      <Outlet/>
      </div>
      </UserContext.Provider>
      </Provider>
    )
  }
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<MainComponent />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/grocery',
        element:(<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>) 
      },
      {
        path:'/cart',
        element:<RestaurantCart />
      },
      
      {
        path:'/menu/:resId',
        element:<Menu />
      },
      
    ],
    errorElement:<Error />,
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);