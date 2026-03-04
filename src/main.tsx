import { StrictMode, type ReactElement } from 'react'
import { HelmetProvider } from "react-helmet-async"; 
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
const AppWrapper=({}):ReactElement=>{
  return(<StrictMode>
    <HelmetProvider>
      <App/>
    </HelmetProvider>
  </StrictMode>);
}
createRoot(document.getElementById('root')!).render(<AppWrapper/>);
