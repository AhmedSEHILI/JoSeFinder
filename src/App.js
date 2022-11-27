
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <div className="content">
          <Routes>
              <Route path="/" element={<Welcome />} />
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