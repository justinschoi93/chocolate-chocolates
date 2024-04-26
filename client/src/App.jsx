import Profile from './components/Profile/Profile';
import LoginButton from './components/Authenticator/LoginButton';
import LogoutButton from './components/Authenticator/LogoutButton';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css'

function App() {
  const { isAuthenticated, error, isLoading } = useAuth0();

  return (
    <ErrorBoundary>
    <Header />
    <div className="app__container">
      {
        isAuthenticated ? 
        <div className="isAuthenticated">
          <div className="user"></div>
          
          <Home/>
        </div>      
        : 
        <div className="isNotAuthenticated">
          <Home/>
        </div>
      }
    </div>
    </ErrorBoundary>
  )
}

export default App
