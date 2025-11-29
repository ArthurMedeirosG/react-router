
import './App.css';
import AppRoutes from '../routes.jsx';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const App = () => {



  return (
    <>
      <header className="top-header">
        <div className="logo-search">
          <Logo />
          <form className="search-bar">
            <input type="text" placeholder="Pesquisar produto..." />
            <button type="submit" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.65" y1="16.65" x2="21" y2="21" />
              </svg>
            </button>
          </form>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to='/Products'>Products</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <AppRoutes/>
    </>
  );
}

export default App;
