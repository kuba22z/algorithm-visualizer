import * as React from 'react';
import {ReactNode} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useAppDispatch} from "../../utils/hooks/storeHooks";
import {toggleDrawer} from "../../store/drawerSlice";

interface HeaderProps {
    children: ReactNode
}

export const Header = (props: HeaderProps) => {
    const dispatch = useAppDispatch();

    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => dispatch(toggleDrawer())}
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    MUI
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    {props.children}
                </Box>
            </Toolbar>
        </AppBar>
    );
}