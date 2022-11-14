import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Parent from './Components/Parent/Parent';
import Child from './Components/Child/Child';
import Gallary from './Components/Gallary/Gallary';
import Contact from './Components/Contact/Contact';
import MainLayout from './Components/MainLayout/MainLayout';
import NotFound from './Components/NotFound/NotFound';
import Settings from './Components/Settings/Settings';
import Application from './Components/Application/Application';
import Personal from './Components/Personal/Personal';
import Home from './Components/Home/Home';

const routers = createBrowserRouter([
  {
    path:"/", element:<MainLayout/>, children:[
      {path:"", element: <Parent/>},
      {path:"gallary", element:<Gallary/>},
      {path:"contact", element:<Contact/>},
      {path:"settings", element:<Settings/>, children:[
        {path:"application", element:<Application/>},
        {path:"personal", element:<Personal/>}
      ]},
      {path:"home", element:<Home/>},
      {path:"*", element:<NotFound/>}
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
