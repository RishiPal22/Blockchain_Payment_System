import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className="flex flex-col  justify-between items-center w-full h-screen">
        <Navbar/>
        <Welcome />
        <div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
