import './App.scss'
import {Box} from "@mui/material";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {NavBar} from "./components/NavBar";

// Based on http://preview.themeforest.net/item/arther-bs3-horizontal-scrolling-vcard-template/full_screen_preview/7383866?_ga=2.40049953.269388720.1677883451-1927653657.1677883451
function App() {
    return (
        <Box className="App">
            <Header/>
            <main>
                <NavBar/>
                <Box id="container">

                </Box>
                <Footer/>
            </main>

        </Box>
    )
}

export default App
