import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import DesignSwitcher from './components/DesignSwitcher';
import TabletDesignView from './components/TabletDesignView';
import MobileDesignView from './components/MobileDesignView';

function App() {
  const [previewMode, setPreviewMode] = useState('desktop');

  return (
    <Router>
      <div className={`app-container ${previewMode}`}>
        {previewMode === 'tablet' ? (
          <TabletDesignView />
        ) : previewMode === 'mobile' ? (
          <MobileDesignView />
        ) : (
          <div className="main-viewport">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </div>
        )}

        <DesignSwitcher setPreviewMode={setPreviewMode} currentMode={previewMode} />
      </div>
    </Router>
  );
}

export default App;