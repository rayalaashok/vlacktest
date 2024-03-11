
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus.tsx";

function App() {
  return (
<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Aboutus/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
