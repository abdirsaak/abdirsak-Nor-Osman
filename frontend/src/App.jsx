import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';



const App = () => {
    const [page, setPage] = useState('home'); 
    return (
        <div>
            {page === 'home' && <Home setPage={setPage} />}
            {page === 'projects' && <Projects setPage={setPage} />}
            {page === 'contact' && <Contact setPage={setPage} />}
        </div>
    );
};

export default App;