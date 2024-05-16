import { useState, useEffect } from "react";
import { AppRoutes } from './routes/config';
import Footer from './components/Footerpages'
import Navbar2 from './components/navbar/Navbar';
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Preloader } from "./components/utils";

function App() {
  const [load, upadateLoad] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {Preloader(load)}
      <div className="App" >
      <Navbar2 />
      {AppRoutes}
      <Footer />
      </div>
    </>
  )
}

export default App
