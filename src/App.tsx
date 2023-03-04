import './App.scss'
import {Box, Button} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {INavItem, NavBar} from "./components/NavBar";
import { Carousel, CarouselItem } from './components/Carousel';
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
        { title: "Profile", content: <Profile /> },
        { title: "Education", content: <Education /> },
        { title: "Experience", content: <Experience /> },
        { title: "Portfolio", content: <Portfolio /> },
        { title: "Publications", content: <Publications /> },
        { title: "Contact", content: <Contact />}
    ];

    return (
        <ThemeProvider theme={appTheme}>
            <Box className="App">
                <Header/>
                <main>
                    <NavBar navItems={navItems} />
                    <Box id="container">
                        <Button onClick={() => setSelectedPageIndex(selectedPageIndex + 1)}>+</Button>
                        <Carousel selectedIndex={selectedPageIndex}>
                            { navItems.map(({ content}, index) => (
                                <CarouselItem key={index}>
                                    {content}
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Box>
                    <Footer/>
                </main>

            </Box>
        </ThemeProvider>
    )
}

export default App
