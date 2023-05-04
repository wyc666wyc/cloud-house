import ReactDom from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import 'uno.css'
import './index.scss'

ReactDom.createRoot(document.querySelector('#app') as HTMLElement ).render(
  <HashRouter>
    <App />
  </HashRouter>
)