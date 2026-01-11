import { useState } from 'react';
import LandingPage from './components/Pages/LandingPage';
import UserInputPage from './components/Pages/UserInputPage';
import AnalyzePage from './components/Pages/AnalyzePage';
import VisualizePage from './components/Pages/VisualizePage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userData, setUserData] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleSubmitData = (data) => {
    setUserData(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'input':
        return <UserInputPage onNavigate={handleNavigate} onSubmitData={handleSubmitData} />;
      case 'analyze':
        return <AnalyzePage onNavigate={handleNavigate} userData={userData} />;
      // case 'visualize':
      //   return <VisualizePage onNavigate={handleNavigate} userData={userData} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;