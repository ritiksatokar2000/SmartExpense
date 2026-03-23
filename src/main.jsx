import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import AddTransaction from './components/AddTransaction.jsx'
import TransactionList from './components/TransactionList.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Dashboard/>},
      {path:"/add-transaction", element:<AddTransaction/>},
      {path:"/transaction-list", element:<TransactionList />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)

