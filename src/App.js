import './App.css';
import {Routes,Route, Link} from "react-router-dom";
import VacancyDetail from './pages/VacancyDetail';
import VacancyLister from './pages/VacancyLister';
import VacancyApplication from './pages/VacancyApplication';
import { useState } from 'react';

function App() {




  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<VacancyLister />}   />
        <Route path="/vacancies/:id" element={<VacancyDetail/>}   />
        <Route path="/vacancies/:id/application" element={<VacancyApplication />}   />
      </Routes>
      
    </div>
  );
}

export default App;
