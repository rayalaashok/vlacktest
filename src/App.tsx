// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';

import HowWeWorkPage from './home/howwework/HowWeWorkPage';
import FeaturePage from './home/features/FeaturePage';


function App() {

  return (
    <div className='w-screen '>
      <HowWeWorkPage/>
      <FeaturePage />
      
    </div>
  )
}

export default App