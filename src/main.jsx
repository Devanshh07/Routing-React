import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './component/home/Home.jsx'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Contact from './component/Contact/Contact.jsx'
import Github from './component/Github/Github.jsx';
import User from './component/User/User.jsx'
import { GithubInfoLoader } from './component/Github/github.jsx'



// const router =  createBrowserRouter([
//   {
//     path :'/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>

//       },
//       {
//             path: "/about",
//             element : <About/>
//       },
//       {
//        path: "/contact", 
//        element : <Contact/> 
       
//       },
//       {
//       path: "/github",
//       element :<Github/>
//       }
//     ]

//   }
// ])
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      
      <Route path="" element ={<Home/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="contact" element ={<Contact/>}/>
      <Route
      path="github" 
      loader = {GithubInfoLoader}
      element ={<Github/>}

      />
      <Route path="user/:userID" element ={<User/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
