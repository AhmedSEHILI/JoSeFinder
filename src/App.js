
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Bg from './Services/Bg';
import Services from './Services/Services';
import Welcome from './Welcome';
import Offers from './Offers/Offers';
import Hero from './Hero/Hero';
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="content">
          <Routes>
            <Route path="/">
               {/* <Route index element={<Welcome />} /> */}
               <Route index element={<Main />} />
               <Route path="ahmed" element={<Services />} />
            </Route>
            
          </Routes>
      </div>
    </Router>
  );
}

export default App;