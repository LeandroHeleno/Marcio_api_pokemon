import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Error from './pages/Error';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre/:id" element={<Sobre />}/>
                
                <Route path="*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;