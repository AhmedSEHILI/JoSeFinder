
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Services from './Services/Services';
import Welcome from './Welcome';
import Offers from './Offers/Offers';
import Hero from './Hero/Hero';
import Main from './Main';
import BackG from './SIgnUp/BackG';

function App() {
  return (
      <div className="content">
        <BackG />

      </div>
  );
}

export default App;