import { AppRoutes } from './routes/config';
import Footer from './components/Footerpages'
import Navbar2 from './components/navbar/Navbar2';
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <div className="App">
      <Navbar2 />
      {AppRoutes}
      <Footer />
      </div>
    </>
  )
}

export default App
