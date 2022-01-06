import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Header from "./containers/Header";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} exact={true} element={<Home/>}/>
                <Route path={'/contact'} exact={true} element={<Contact/>}/>
            </Routes></>
    );
}

export default App;
