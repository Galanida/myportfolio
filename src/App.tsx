import { useState, useEffect } from "react";
import { AppRoutes } from './routes/config';
import Footer from './components/Footerpages'
import Navbar from './components/navbar/Navbar';
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
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar/>
      {AppRoutes}
      <Footer />
      </div>
    </>
  )
}

export default App
