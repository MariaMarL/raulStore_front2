import { configureStore } from '@reduxjs/toolkit'
import { useContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProviderList from './components/ProviderList'
import ClientInvoice from './pages/ClientInvoice'
import MyProducts from './pages/MyProducts'
import MyProviders from './pages/MyProviders'
import NewProduct from './pages/NewProduct'
import NewProvider from './pages/NewProvider'
import ProviderBill from './pages/ProviderBill'
import Store from './state/Store'
import './App.css'

type providerType = {
  id: number,
  name: String,
  dni: String,
  phone: String
}
function App() {
  
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link className="link" to="/MyProviders">MyProviders</Link>
        <Link className="link" to="/NewProvider">NewProvider</Link>
        <Link className="link" to="/MyProducts">MyProducts</Link>
        <Link className="link" to="/NewProduct">NewProduct</Link>
        <Link className="link" to="/ClientInvoice">ClientInvoice</Link>
        <Link className="link" to="/ProviderBill">ProviderBill</Link>
      </nav>
      <Routes>
        <Route path="/NewProvider" element={<NewProvider />} />
        <Route path="/MyProviders" element={<MyProviders />} />
        <Route path="/MyProducts" element={<MyProducts />} />
        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/ClientInvoice" element={<ClientInvoice />} />
        <Route path="/ProviderBill" element={<ProviderBill />} />
      </Routes>
      <footer className="footer">This is my footer</footer>
    </BrowserRouter>
  );
}

export default App
export type {providerType}
