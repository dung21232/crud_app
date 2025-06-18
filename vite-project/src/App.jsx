import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import PostList from "./components/PostList";
import Contacts from "./components/Contacts";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Posts from "./components/Posts";
import "./css/main.css";

import "./App.css";

function App() {
    return (
        <>
            <div className="page-center">
                <Router>
                    <Nav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="about" element={<About />} />
                        <Route exact path="contact" element={<Contacts />} />
                        <Route exact path="posts" element={<Posts />}>
                            <Route path="postlist" element={<PostList />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
