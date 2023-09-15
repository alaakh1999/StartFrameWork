
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import About from './Component/About/About'
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Notfound from './Component/Notfound/Notfound';
export default function App() 
{
  const routes = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'about',element:<About></About>}, 
      {path:'portfolio',element:<Portfolio></Portfolio>},
      {path:'contact',element:<Contact></Contact>},
      {path:'*',element:<Notfound></Notfound>}

    ]}
  ])
  return (
  
    <RouterProvider router={routes}></RouterProvider>
   
  );
}



