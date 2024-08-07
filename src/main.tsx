import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/*' element={ <App />}/>
            </Routes>
        </Router>
    </Provider>
    </StrictMode>
    ,
)
