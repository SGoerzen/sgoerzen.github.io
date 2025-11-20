import {Avatar, Box, Stack, SvgIcon, Typography} from "@mui/material";
import React, {ElementType} from "react";

interface IServiceCardProps {
    icon: ElementType<any>,
    title: string,
    text: string
}

export const ServiceCard = ({icon, title, text}: IServiceCardProps) => {
    return <Box className="service-card">
        <Stack direction="row">
            <Avatar sx={{mr: 2, backgroundColor: "#0093D0"}}>
                <SvgIcon component={icon}/>
            </Avatar>
            <Typography variant="h6">{title}</Typography>
        </Stack>
        <Box>
            <Typography sx={{
                mt: 1,
                fontFamily: "Roboto, sans-serif",
                fontSize: "13px",
                color: "#666666",
                lineHeight: 1,
                textAlign: "justify"
            }}>{text}</Typography>
        </Box>
    </Box>
}
