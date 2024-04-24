import Profile from './components/Profile/Profile';
import LoginButton from './components/Authenticator/LoginButton';
import LogoutButton from './components/Authenticator/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css'

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="app__container">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  )
}

export default App
