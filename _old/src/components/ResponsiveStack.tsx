import {Stack, StackProps} from "@mui/material";

type IStack = Omit<StackProps, "spacing" | "direction">
interface IResponsiveStackProps extends IStack {
    direction: "row" | "column"
}
export const ResponsiveStack = ({direction, children, ...props}: IResponsiveStackProps) => {
    return <Stack spacing={{ xs: 1, sm: 2, md: 4 }}
                  direction={direction == "row" ? { xs: 'column', sm: 'row' } : { xs: 'column', sm: 'column' }}
                  {...props}>
        {children}
    </Stack>
}
