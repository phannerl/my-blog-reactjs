import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom'
import Loading from './components/loading.tsx'
import './index.css'
import BlogsLayout from './pages/blogs/layout.tsx'
import PageLayout from './pages/layout.tsx'
import store from './redux/index.tsx'

// eslint-disable-next-line react-refresh/only-export-components
const ArticlesPage = React.lazy(
    () => import('./pages/blogs/articles/index.tsx'),
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route
                            path='/'
                            element={<Navigate replace to='/blogs' />}
                        />
                        <Route element={<PageLayout />}>
                            <Route path='blogs' element={<BlogsLayout />}>
                                <Route
                                    path='articles/:articleId'
                                    element={<ArticlesPage />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </Provider>
    </React.StrictMode>,
)
