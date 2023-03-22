import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={
                <>
                    <Header></Header>
                    <Footer></Footer>
                </>
            }/>
        </Routes>
    </div>
  );
}

export default App;
