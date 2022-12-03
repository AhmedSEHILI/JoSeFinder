
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Bg from './Services/Bg';
import Services from './Services/Services';
import Welcome from './Welcome';
import Offers from './Offers/Offers';

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