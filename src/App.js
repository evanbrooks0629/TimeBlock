import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
function App() {
 return (
    <Router>
       <Routes>
            <Route path={`${process.env.PUBLIC_URL}/TimeBlock/`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL}/TimeBlock/Dashboard`} element={<Dashboard />} />
       </Routes>
    </Router>
 );
}
export default App;