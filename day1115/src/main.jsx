import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Provider } from './store/index.jsx'
createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
)
