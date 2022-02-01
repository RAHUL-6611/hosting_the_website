import Home from './components/home/home'
import './App.css'
import Footer from './components/footer/footer'
// import NavbarComponent from './components/head_sec/NavbarComponent'
import Header from './components/head_sec/Header'

function App() {

  return (
    <div className="App">
         {/* include nav header here */}
         <Header />
         {/* <NavbarComponent /> */}
         <Home />
         <Footer />
    </div>
  )
}

export default App
