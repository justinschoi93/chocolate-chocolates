import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import './App.css'

function App() {

  return (
    <ErrorBoundary>
    <Header />
    <div className="app__container">
      <Home/>
    </div>
    </ErrorBoundary>
  )
}

export default App
