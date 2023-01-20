import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Logout from './components/Logout';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route element={<HomePage />} path="/" />
                <Route element={<Dashboard />} path="/dashboard" />

                <Route element={<Signup />} path="/signup" />
                <Route element={<Signin />} path="/signin" />
                <Route element={<Logout />} path="/logout" />
            </Routes>
        </>
    );
}

export default App;
