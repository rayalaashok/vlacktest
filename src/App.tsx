<<<<<<< HEAD
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
=======
import { useState } from 'react'
import './App.css';
import {useTranslation} from "react-i18next";

function App() {
  const [count, setCount] = useState(0);
    const { t } = useTranslation();
  return (
      <div className={`mt-6 base_button`}>
          <p>{t('welcome')}</p>
          <p>{t('description')}</p>

      </div>
  )
}


export default App
>>>>>>> main
