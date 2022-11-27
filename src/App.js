
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './Landing';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="content">
          <Routes>
              <Route path="/" element={<Landing />} />
          </Routes>
      </div>

      {/* <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<BlogList />} />
          </Routes>
        </div>
      </div> */}
    </Router>
  );
}

export default App;