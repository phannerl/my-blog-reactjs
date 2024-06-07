import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Articles } from './pages/blogs/articles/articles.tsx';
import { Provider } from 'react-redux';
import store from './redux/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/blogs/:pageId/" element={<App />} >
                        <Route path="articles/:id" element={<Articles />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
);
