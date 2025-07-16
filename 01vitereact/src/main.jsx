import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'


const username = "Abhi"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'visit google via link',
  username
)

createRoot(document.getElementById('root')).render(

    <App />
    // reactElement
    // App()

)
