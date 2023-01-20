import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RightContent from './components/RightContent/RightContent';

function App() {
    return (
        <div>
            <Header />
            <div className="content">
                <Navbar />
                <RightContent />
            </div>
        </div>
    );
}

export default App;
