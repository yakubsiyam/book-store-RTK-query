import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import Books from "./components/Books/Books";
import EditBook from "./components/EditBook/EditBook";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Books />} />
                {/* <Route path="/books" element={<Books />} /> */}
                <Route path="/book/add" element={<AddBook />} />
                <Route path="/book/edit" element={<EditBook />} />
            </Routes>
        </Router>
  );
}

export default App;
