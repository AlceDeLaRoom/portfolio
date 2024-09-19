import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from "./page/main";
import Error404 from './page/error404';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/portfolio" element={<Main />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
   );
}

export default App;