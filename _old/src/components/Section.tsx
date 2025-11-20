import {Box, BoxProps} from "@mui/material";

interface ISectionProps extends BoxProps {

}
export const Section = ({children, ...props}: ISectionProps) => {
    return <Box component="section" {...props}>
        {children}
    </Box>
}
