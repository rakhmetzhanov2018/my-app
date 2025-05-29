import './App.css';
import { Header } from './components/header';
import { Navigation } from './components/navigation';
import { MainContent } from './components/content';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { About } from './components/about';
import { SignUp } from './components/sign-up';
import HomeImage from './Images/Content-Image.png'

function App() {
  return (
    <Router>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <div className="App">
        <Header/>
      <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/sign-up' Component={SignUp}></Route>
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

function Home() {
  return <div className='App'>
    <Navigation/>
    <img src={HomeImage} style={{margin: '50px 0 0 15%', width: 'fit-content', height: 'fit-content'}}></img>
    <MainContent/>
  </div>
}

export default App;
