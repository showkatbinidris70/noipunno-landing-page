import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Video from "./components/Video";
import Contact from "./components/Contact";
import Layout from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Ambassador from "./components/Ambassador";


function App() {
    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Layout/>}>
                    <Route index
                        element={<Home/>}/>
                    <Route path="about"
                        element={<About/>}/>
                    <Route path="ambassador"
                        element={<Ambassador/>}/>
                    <Route path="faq"
                        element={<FAQ/>}/>
                    <Route path="contact"
                        element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>);
}

export default App;
