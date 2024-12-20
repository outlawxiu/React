import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import MusicPlayer from './pages/musicPlayer/musicPlayer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicPlayer></MusicPlayer>
    {/* <App /> */}
  </StrictMode>,
)
