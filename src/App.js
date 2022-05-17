import React from 'react';
import './App.css';
import GetSection from './components/GetSection/view';
import PostSection from './components/PostSection/view';
import Some from './Some';

function App() {
  return (
    <div id="app" className="container my-3">
      <h3>React Axios example - netlify hihihihihih</h3>
      <GetSection />
      <PostSection />
      {/* <Some/> */}
    </div>
  );
}

export default App;
