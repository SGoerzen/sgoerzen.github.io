import {Button, ButtonProps} from "@mui/material";

import RequestIcon from "@mui/icons-material/MailRounded";

interface IRequestResumeProps extends ButtonProps {}
export const RequestResume = ({children, ...props}: IRequestResumeProps) => {
  return <>
    <Button startIcon={<RequestIcon fontSize="large" />} {...props}>
        {children}
    </Button>
  </>
}
