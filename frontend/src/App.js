import { BrowserRouter,Routes,Route, Outlet,createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css"
const Layout=()=>{
  return(
    <>
    <Navbar></Navbar>
  <Outlet></Outlet>
  <Footer></Footer>
    </>
  )
}
const router=createBrowserRouter([{
  path:"/",
  element:<Layout></Layout>,
  children:[
  {path:"/home",
    element:<Home></Home>
  },
  {path:`/?cat=art`,
    element:<Home></Home>
  },
  {path:"/single/:id",
    element:<Single></Single>
  },
  {path:"/write",
    element:<Write></Write>
  },
  {path:"/write/:id",
    element:<Write></Write>
  }
  ]
},
{
  path:"/login",
  element:<Login></Login>
},
{
  path:"/register",
  element:<Register></Register>
}
])
function App() {

  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
