import './App.scss'
import {Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {INavItem, NavBar} from "./components/NavBar";
import {Carousel} from './components/Carousel';
import React from "react";

import {appTheme} from "./theme";
import {Profile} from "./pages/Profile";
import {Education} from "./pages/Education";
import {Experience} from "./pages/Experience";
import {Portfolio} from "./pages/Portfolio";
import {Contact} from "./pages/Contact";
import {Publications} from "./pages/Publications";

// Based on http://preview.themeforest.net/item/arther-bs3-horizontal-scrolling-vcard-template/full_screen_preview/7383866?_ga=2.40049953.269388720.1677883451-1927653657.1677883451
function App() {
    const [selectedPageIndex, setSelectedPageIndex] = React.useState<number>(0);

    const navItems: INavItem[] = [
        {title: "Profile", content: <Profile/>},
        {title: "Education", content: <Education/>},
        {title: "Experience", content: <Experience/>},
        {title: "Portfolio", content: <Portfolio/>},
        {title: "Publications", content: <Publications/>},
        {title: "Contact", content: <Contact/>}
    ];

    const handleOnChangedPage = (oldIndex: number, newIndex: number) => {
        setSelectedPageIndex(newIndex);
    };

    return (
        <ThemeProvider theme={appTheme}>
            <Box className="App">
                <Header/>
                <Box component="main">
                    <NavBar navItems={navItems} initialPage={selectedPageIndex} onChangedPage={handleOnChangedPage}/>
                    <Box id="container">
                        <Carousel selectedIndex={selectedPageIndex} items={navItems.map(n => n.content)}/>
                    </Box>
                    <Footer/>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App
