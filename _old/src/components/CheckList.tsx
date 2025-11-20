import {List, ListItem, ListItemIcon, ListItemText, ListProps, Paper, Typography} from "@mui/material";
import React from "react";

import CheckIcon from "@mui/icons-material/Check";

interface ICheckListProps extends ListProps {
    title: string,
    items: string[]
}
export const CheckList = ({items, title, ...props}: ICheckListProps) => {
    return <Paper elevation={0}>
        <Typography variant="h6">{title}</Typography>
        <List dense={true} {...props}>
            { items.map(item => (
                <ListItem>
                    <ListItemIcon>
                        <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                </ListItem>
            )) }
        </List>
    </Paper>
}
