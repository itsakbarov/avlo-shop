import Button from "./components/Button/Button";
import Header from "./containers/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, BrowserRouter as Router } from "react-router-dom"

function App() {
    return (
        <div className="App">
                <Header/>
                {/* <Home/> */}
                <About/>

        </div>
    );
}

export default App;
