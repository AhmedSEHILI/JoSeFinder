
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Bg from './Services/Bg';
import Services from './Services/Services';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <div className="content">
          <Routes>
              <Route path="/" element={<Welcome />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;