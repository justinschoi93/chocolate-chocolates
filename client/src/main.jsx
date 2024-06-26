import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-rctjvozwd0neg2cg.us.auth0.com"
    clientId="zYq7NBCQ7rcO46C8xwlwPMAxoMzjRyk1"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
  >
    <App />
  </Auth0Provider>
)
