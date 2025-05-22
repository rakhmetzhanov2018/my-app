import './App.css';
import { Header } from './components/header';
import { Navigation } from './components/navigation';
import { MainContent } from './components/content';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Contact } from './components/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      </div>
      <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route path='/contact' Component={Contact}></Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <div className='App'>
    <Navigation/>
    <div style={{margin: '40px', width: '40vw', height: '20vh', border: 'solid'}}></div>
    <MainContent/>
  </div>
}

export default App;
