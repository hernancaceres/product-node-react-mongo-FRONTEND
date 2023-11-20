
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//importamos bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeContextProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>

)
