import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Header from "./containers/Header";
import RatePage from "./pages/ratePage/ratePage";
import Opportunity from './pages/opportunity/opportunity'
import Usage from './pages/Usage/Usage'
import Footer from "./containers/footer/footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} exact={true} element={<Home/>}/>
                <Route path={'/contact'} exact={true} element={<Contact/>}/>
                <Route path={'/rate'} exact={true} element={<RatePage/>}/>
                <Route path={'/opportunity'} exact={true} element={<Opportunity/>}/>
                <Route path={'/usage'} exact={true} element={<Usage/>}/>
            </Routes>
            <Footer/>
            </>
    );
}

export default App;
