import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Articles } from './pages/blogs/articles/articles.tsx';
import store from './redux/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/blogs" />}
                    />
                    <Route path="/blogs" element={<App />}>
                        <Route path="articles" element={<Articles />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
);
