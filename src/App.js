import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './components/Landingpage';
import Home from './components/Home';
import WatchHistory from './components/WatchHistory';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div >
     <Header/>
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<WatchHistory/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;