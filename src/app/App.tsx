import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import ConnectPage from "../features/Connect/ui/ConnectPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<ConnectPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;