import React from 'react';
// import './App.css';
import './mycss/instagram.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LeftNavigation from './components/left_sidebar_links';
import CenterContent from './components/center_content';
import RightSuggestions from './components/right_sidebar_suggestion';

function App() {
  return (

    // imported and used 3 components in App function
    
    <div className='main_app_div'>
      <LeftNavigation />
      <CenterContent />
      <RightSuggestions name="pooja_rathi" />
    </div>
    
  );
}

export default App;
