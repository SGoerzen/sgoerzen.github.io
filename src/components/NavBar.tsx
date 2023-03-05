import "./NavBar.scss";
import React, {ReactNode, useEffect} from "react";
import {
    AppBar,
    Box,
    Container,
    FormControl,
    IconButton,
    InputLabel,
    Select,
    SelectChangeEvent,
    Toolbar
} from "@mui/material";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import ArrowLeft from "@mui/icons-material/ChevronLeft";
import ArrowRight from "@mui/icons-material/ChevronRight";

import LogoIcon from "@mui/icons-material/Psychology";
import {transition} from "../_helpers/mixins";

export interface INavItem {
    title: string,
    content: ReactNode
}

export interface INavBarProps {
    navItems: INavItem[],
    initialPage?: number,
    onChangedPage?: (oldIndex: number, newIndex: number) => void
}

interface IWhiteLineState {
    left: number,
    width: number
}

export const NavBar = ({navItems, onChangedPage, initialPage}: INavBarProps) => {
    const navItemsRef = React.createRef();
    const [activePage, setActivePage] = React.useState<number>(initialPage ?? 0);
    const [prevPage, setPrevPage] = React.useState<number>(initialPage ?? 0);
    const [whiteLineState, setWhiteLineState] = React.useState<IWhiteLineState>({left: 0, width: 0});
    const updatePage = (index: number) => {
        setPrevPage(activePage);
        setActivePage(index);
    };
    const handleChangeNav = (e: SelectChangeEvent<number>) => {
        updatePage(e.target.value as number);
    };
    const handleClickLeft = () => {
        updatePage(Math.max(0, activePage - 1));
    };
    const handleClickRight = () => {
        updatePage(Math.min(navItems.length - 1, activePage + 1));
    };
    const updateWhiteLine = () => {
        const el = navItemsRef.current as HTMLElement;
        if (!el)
            return;

        const activePageButton = el.children[activePage] as HTMLElement;
        setWhiteLineState({ left: activePageButton.offsetLeft, width: activePageButton.offsetWidth });
    };

    useEffect(() => {
        updateWhiteLine();
        onChangedPage && onChangedPage(prevPage, activePage);
    }, [prevPage, activePage]);

    const Logo = ({responsive}: { responsive: boolean }) => {
        return <>
            <LogoIcon sx={{display: responsive ? {xs: 'flex', md: 'none'} : {xs: 'none', md: 'flex'}, mr: 1}}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: responsive ? {xs: 'flex', md: 'none'} : {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                SG
            </Typography>
        </>
    };

    return <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Logo responsive={false}/>
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, maxWidth: "150px"}}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="responsible-navbar-selection">Navigation</InputLabel>
                        <Select
                            labelId="responsible-navbar-selection-label"
                            id="responsible-navbar-selection-select"
                            value={activePage}
                            label="Navigation"
                            onChange={handleChangeNav}
                        >
                            {navItems.map(({title}, index) => (
                                <MenuItem key={index} value={index}>{title}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{flex: 1}}/>
                <Logo responsive={true}/>
                <Box  ref={navItemsRef} sx={{flexGrow: 1, position: "relative", display: {xs: 'none', md: 'flex'},
                    "&:before": {
                        content: "''",
                        height: "2px",
                        width: whiteLineState.width + "px",
                        background: "white",
                        position: "absolute",
                        bottom: 0,
                        left: whiteLineState.left + "px",
                        ...transition("all .25s linear")
                    }}}>
                    {navItems.map(({title}, index) => (
                        <Button
                            size="large"
                            key={index}
                            onClick={_ => updatePage(index)}
                            sx={{
                                color: 'white',
                                display: 'block',
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                textTransform: "none",
                                "&:hover": {
                                    color: "#303030"
                                },
                                float: "left"
                            }}
                        >
                            {title}
                        </Button>
                    ))}

                </Box>

                <Box sx={{flexGrow: 0, "& button:hover": {color: "white"}}}>
                    <IconButton onClick={handleClickLeft} size="small"
                                sx={{mr: -1.5, visibility: activePage < 1 ? "hidden" : "visible"}} disableFocusRipple>
                        <ArrowLeft fontSize="large"/>
                    </IconButton>
                    <IconButton onClick={handleClickRight} size="small"
                                sx={{ml: -1.5, visibility: activePage >= navItems.length - 1 ? "hidden" : "visible"}}
                                disableFocusRipple>
                        <ArrowRight fontSize="large"/>
                    </IconButton>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
};
