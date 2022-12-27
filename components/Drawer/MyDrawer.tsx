import * as React from "react";
import {ReactNode} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer"
import {useAppDispatch, useAppSelector} from "../../utils/hooks/storeHooks";
import {toggleDrawer} from "../../store/drawerSlice";

type DrawerProps = {
    children: ReactNode
    drawerWidth: number
}

export const MyDrawer = (props: DrawerProps) => {
    const mobileOpen = useAppSelector(state => state.drawer.mobileOpen);
    const dispatch = useAppDispatch();

    return (
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => dispatch(toggleDrawer())}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: {xs: 'block', sm: 'none'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: props.drawerWidth},
            }}
        >
            <Box
                onClick={() => dispatch(toggleDrawer())}
                sx={{textAlign: 'center'}}>
                <Typography variant="h6" sx={{my: 2}}>
                    MUI
                </Typography>
                <Divider/>
                {props.children}
            </Box>
        </Drawer>
    )
}