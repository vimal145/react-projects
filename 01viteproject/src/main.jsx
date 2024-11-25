import React from 'react';
import ReactDOM from 'react-dom';
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h3>
        MY APP
      </h3>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: '_blank'
//   },
//   Children: 'click me to visit gooogle'
// }



const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " chai aur react";

const reactElement = React.createElement(
  'a',
  {href: "https://google.com",target: '_blank' },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(

reactElement    
  
)
