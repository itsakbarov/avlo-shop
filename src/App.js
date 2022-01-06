import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
    return (
            <Routes>
                <Route path={'/'} exact={true} element={<Home/>}/>
                <Route path={'/contact'} exact={true} element={<Contact/>}/>
            </Routes>
    );
}

export default App;
