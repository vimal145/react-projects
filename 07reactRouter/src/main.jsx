import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/> 
      <Route path='about' element={<About/>}/> 
      <Route path='contact' element={<Contact/>}/> 
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/> 
      <Route path='user/:userid' element={<User/>}/> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
