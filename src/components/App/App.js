import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "../Header/Header";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={
                <>
                    <Header></Header>
                </>
            }/>
        </Routes>
    </div>
  );
}

export default App;
