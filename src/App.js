import './App.css';
import IndexPage from "./components/IndexPage"
import Login  from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<IndexPage />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
