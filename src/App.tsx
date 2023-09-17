import { ToastContainer } from "react-toastify"
import GlobalStyle from "./assets/constant/styles"
import Router from "./routes"
import 'react-toastify/dist/ReactToastify.css'


function App() {
  
  return (
    <>
    <ToastContainer/>
    <GlobalStyle />
    <Router />
    </>
  )
}

export default App
