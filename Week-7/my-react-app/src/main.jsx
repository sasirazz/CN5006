import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './MyApp.jsx'
import Product from './Product.jsx' 
import Product from './Discount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Welcome name="Sasi Razz"/>
    <Product productName="Laptop" price={800} /> 
    <DiscountCalculator productName="Ipad" price={1500} />
  </StrictMode>,
)
