/// <reference types="vite-plugin-svgr/client" />

import React, {ReactNode} from "react";
import {Box, IconButton, SvgIcon, Typography} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import {ReactComponent as LinkedInIcon} from "../assets/brands/linkedin-in.svg";
import {ReactComponent as OrcIdIcon} from "../assets/brands/orcid.svg";
import {ReactComponent as ResearchGateIcon} from "../assets/brands/researchgate.svg";
import {ReactComponent as XingIcon} from "../assets/brands/xing.svg";
import {appTheme} from "../theme";

interface ISocialEntry {
    icon: ReactNode,
    link: string,
    title: string
}

export const Footer = () => {

    const socials: ISocialEntry[] = [
        { title: "GitHub", link: "https://github.com/SGoerzen", icon: <GitHubIcon fontSize="large" />},
        { title: "Twitter", link: "https://twitter.com/sergejg92", icon: <TwitterIcon fontSize="large" />},
        { title: "Xing", link: "https://www.xing.com/profile/Sergej_Goerzen2", icon: <SvgIcon inheritViewBox fontSize="large" component={XingIcon} />},
        { title: "LinkedIn", link: "https://www.linkedin.com/in/sergej-g%C3%B6rzen-a7a77b178", icon: <SvgIcon inheritViewBox fontSize="large" component={LinkedInIcon} />},
        { title: "Research Gate", link: "https://www.researchgate.net/profile/Sergej-Goerzen", icon: <SvgIcon inheritViewBox fontSize="large" component={ResearchGateIcon} />},
        { title: "ORCid", link: "https://orcid.org/0000-0003-3853-2435", icon: <SvgIcon inheritViewBox fontSize="large" component={OrcIdIcon} />},
    ];

    return <footer style={{
        background: "#EBEBEB",
        padding: "40px 0",
        color: "#3333"
    }}>
        <Box className="social-icons" sx={{
            paddingBottom: "20px",
            "& ul": {
                listStyleType: "none",
                margin: 0,
                padding: 0,
                "& li": {
                    display: "inline-block",
                    margin: 0,
                    "& svg": {
                        width: "100%",
                        color: "white"
                    }
                }
            }
        }}>
            <ul>
                {
                    socials.map(({title, link, icon}, index) => (
                        <li key={index}>
                            <IconButton target="_blank" size="large" color="primary" title={title} href={link} sx={{
                                m: 0.2,
                                width: 52,
                                height: 52,
                                backgroundColor: appTheme.palette.primary.main,
                                "&:hover": {
                                    backgroundColor: "#303030"
                                }
                            }}>{icon}</IconButton>
                        </li>
                    ))
                }
            </ul>
        </Box>
        <Box>
            <Typography sx={{color: "#3333", fontSize: "13px"}}>
                Copyright &copy; 2023 By Sergej Görzen. All rights reserved.
            </Typography>
        </Box>
    </footer>
};
