
import './App.css';
import Sliderr from './Components/Container/Sliderr';
import Footer from './Components/Pages/Footer';
import Login from './Components/Pages/Login/Client/Login';
import Navbar from './Components/Pages/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
  
<Navbar/>
<main>
<Outlet/>
</main>
<Footer/>
</>
  
  );
}

export default App;

/* <Home/> */