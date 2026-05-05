import { BrowserRouter as Router } from "react-router-dom";
import { ModalVideoProvider } from "./Components/Video/ModalVideoContext";
import AppRouter from "./Router";
import { NavProvider } from "./Components/Context/NavContext";
import Header from "./Components/Header/header";
import Sidebar from "./Components/Sidebar/sidebar";
import Footer from "./Components/Footer/footer";


function App() {
    return(
        <Router>
            <NavProvider>
                <ModalVideoProvider>
                    <Header />
                    <AppRouter />
                    <Sidebar />
                    <Footer />
                </ModalVideoProvider>
            </NavProvider>
        </Router>
    );
}

export default App
