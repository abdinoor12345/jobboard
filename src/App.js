 import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Company from './Pages/Company';
function App() {
  return (
    <div className="App mb-0">
      <h1 className="text-3xl font-bold font-light text-green-500">
 Imara JobBoard.  </h1>
      <Router>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={ <Home/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/companies" element={<Company/>} />
          <Route path="/post-job" element={<h2>Post a Job Page</h2>} />
          <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
        </Routes>
      </Router>
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
  <p>&copy; {new Date().getFullYear()} Imara JobBoard. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;
