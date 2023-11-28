import './style.scss';

import { Route, Routes } from 'react-router';

import Layout from './Layout/Layout';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route element={<Layout />}>{/* inner layout */}</Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
