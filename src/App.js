import './App.css';
import {Routes,Route} from "react-router-dom";
import VacancyDetail from './pages/VacancyDetail';
import VacancyLister from './pages/VacancyLister';
import VacancyApplication from './pages/VacancyApplication';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VacancyLister/>}   />
        <Route path="/vacancies/:id" element={<VacancyDetail/>}   />
        <Route path="/vacancies/:id/application" element={<VacancyApplication/>}   />
      </Routes>
      
    </div>
  );
}

export default App;
