
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home/Home";
import Router from "./Router/Router";
AOS.init();

function App() {
  

  return (
    <>
    
      <Router />
    </>
  );
}

export default App;
