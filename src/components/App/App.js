import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={
                <>
                    <Header></Header>
                    <Main></Main>
                    <Footer></Footer>
                </>
            }/>
        </Routes>
    </div>
  );
}

export default App;
