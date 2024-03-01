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
