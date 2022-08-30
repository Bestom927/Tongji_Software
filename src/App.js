import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Attributions from './pages/Attributions/Attributions';
import Collaborations from './pages/Collaborations/Collaborations';
import Communication from './pages/Communication/Communication'; 
import Contribution from './pages/Contribution/Contribution';
import Description from './pages/Description/Description';
import Education from './pages/Education/Education';
import Engineering from './pages/Engineering/Engineering';
import Entrepreneurship from './pages/Entrepreneurship/Entrepreneurship';
import Experiments from './pages/Experiments/Experiments';
import Hardware from './pages/Hardware/Hardware';
import HumanPractices from './pages/HumanPractices/HumanPractices';
import Implementation from './pages/Implementation/Implementation';
import Improve from './pages/Improve/Improve';
import Inclusivity from './pages/Inclusivity/Inclusivity';
import Index from './pages/Index/Index';
import Measurement from './pages/Measurement/Measurement';
import Model from './pages/Model/Model';
import Notebook from './pages/Notebook/Notebook';
import PartCollection from './pages/PartCollection/PartCollection';
import Partnership from './pages/Partnership/Partnership';
import Parts from './pages/Parts/Parts';
import Plant from './pages/Plant/Plant';
import ProofOfConcept from './pages/ProofOfConcept/ProofOfConcept';
import Results from './pages/Results/Results';
import Safety from './pages/Safety/Safety';
import Software from './pages/Software/Software';
import Sustainable from './pages/Sustainable/Sustainable';
import Team from './pages/Team/Team';

import NavBar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      
        <Toolbar/>
      
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/tongji-software' element={<Home />} />
          <Route exact path='/tongji-software/attributions' element={<Attributions />} />
          <Route exact path='/tongji-software/collaborations' element={<Collaborations />} />
          <Route exact path='/tongji-software/communication' element={<Communication />} />
          <Route exact path='/tongji-software/contribution' element={<Contribution />} />
          <Route exact path='/tongji-software/description' element={<Description />} />
          <Route exact path='/tongji-software/education' element={<Education />} />
          <Route exact path='/tongji-software/engineering' element={<Engineering />} />
          <Route exact path='/tongji-software/entrepreneurship' element={<Entrepreneurship />} />
          <Route exact path='/tongji-software/experiments' element={<Experiments />} />
          <Route exact path='/tongji-software/hardware' element={<Hardware />} />
          <Route exact path='/tongji-software/human-practices' element={<HumanPractices />} />
          <Route exact path='/tongji-software/implementation' element={<Implementation />} />
          <Route exact path='/tongji-software/improve' element={<Improve />} />
          <Route exact path='/tongji-software/inclusivity' element={<Inclusivity />} />
          <Route exact path='/tongji-software/index' element={<Index />} />
          <Route exact path='/tongji-software/measurement' element={<Measurement />} />
          <Route exact path='/tongji-software/model' element={<Model />} />
          <Route exact path='/tongji-software/notebook' element={<Notebook />} />
          <Route exact path='/tongji-software/part-collection' element={<PartCollection />} />
          <Route exact path='/tongji-software/partnership' element={<Partnership />} />
          <Route exact path='/tongji-software/parts' element={<Parts />} />
          <Route exact path='/tongji-software/plant' element={<Plant />} />
          <Route exact path='/tongji-software/proof-of-concept' element={<ProofOfConcept />} />
          <Route exact path='/tongji-software/results' element={<Results />} />
          <Route exact path='/tongji-software/safety' element={<Safety />} />
          <Route exact path='/tongji-software/software' element={<Software />} />
          <Route exact path='/tongji-software/sustainable' element={<Sustainable />} />
          <Route exact path='/tongji-software/team' element={<Team />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}


export default App;
