import {Avatar, Box, Stack, SvgIcon, Typography} from "@mui/material";
import {ElementType} from "react";
import {borderRadius} from "../_helpers/mixins";

interface IHeadBoxProps {
    icon: ElementType<any>,
    title: string,
    text: string
}
export const HeadBox = ({icon, title, text}: IHeadBoxProps) => {
  return <Stack className="head-box" sx={{
      padding: "20px",
      background: "#f4f4f4",
      margin: "20px 0",
      ...borderRadius("3px"),
  }} direction="row">
      <Avatar sx={{ width: 64, height: 64, m: 2, backgroundColor: "white", mr: 2 }}>
          <SvgIcon fontSize="large" component={icon} sx={{color: "#666666"}} />
      </Avatar>
      <Box>
          <Typography variant="h6" sx={{color: "#0093D0"}}>{title}</Typography>
          <Typography sx={{color: "#999", fontFamily: "Raleway, sans-serif"}}>{text}</Typography>
      </Box>
  </Stack>
}
