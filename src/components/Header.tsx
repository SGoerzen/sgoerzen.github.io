import {Box, Typography} from "@mui/material";
import {borderRadius} from "../_helpers/mixins";

export const Header = () => {
    return <header style={{
        background: "#303030",
        padding: "0 0 70px 0",
        width: "100%"
    }}>
        <Box id="top-bar" sx={{
            backgroundColor: "#0093D0", //#EA8005
            height: 130,
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 1
        }} />
        <Box id="profile-head" sx={{
            width: "100%",
            margin: 0,
            color: "#FFF",
            position: "relative",
            zIndex: 2
        }}>
            <Box sx={{
                padding: "10px 0 70px 0"
            }}>
                <img style={{
                    width: 240,
                    ...borderRadius("50%")
                }} src="./sergej-goerzen.1024x1024.jpg"/>
                <Box className="profile-name">
                    <Typography variant="h2" sx={{
                        padding: "15px",
                        textTransform: "uppercase",
                        fontSize: "60px",
                        fontWeight: 800,
                        color: "#ffffff",
                        margin: 0
                    }}>I'm Sergej Görzen</Typography>
                    <Typography sx={{
                        color: "#ccc",
                        fontSize: "22px",
                        display: "block",
                        fontWeight: 600,
                    }}>research assistant, consultant and software engineer</Typography>
                </Box>
            </Box>
        </Box>
    </header>
};
