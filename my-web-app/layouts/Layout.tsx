import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import * as React from "react";
import {FunctionComponent} from "react";
import {InferProps} from "prop-types";
import {Header} from "../components/Header/Header";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {MyDrawer} from "../components/Drawer/MyDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

export const Layout: FunctionComponent<InferProps<HTMLElement>> = ({children}: InferProps<HTMLElement>) => {
    const navItems = [{href: "/", label: "Home"}, {href: "/dashboard", label: "Dashboard"}, {
        href: "/about",
        label: "About"
    }, {href: "/contact", label: "Contact"}];

    return (
        <div className={styles.container}>
            <Head>
                <title>My-webb-app by Jakub Naumowicz</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="icon" href="/home/kuba/Projects/kuba22z.github.io/my-web-app/public/favicon.ico"/>
            </Head>
            <main>
                <Box sx={{display: 'flex'}}>
                    <Header>
                        {navItems.map((item) => (
                            <Button href={item.href} key={item.label} sx={{color: '#fff'}}>
                                {item.label}
                            </Button>
                        ))}
                    </Header>
                    <Box component="nav">
                        <MyDrawer drawerWidth={240}>
                            <List>
                                {navItems.map((item) => (
                                    <ListItem key={item.label} disablePadding>
                                        <ListItemButton sx={{textAlign: 'center'}}>
                                            <ListItemText primary={item.label}/>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </MyDrawer>
                    </Box>
                    <Box component="main" sx={{p: 3}}>
                        <Toolbar/>
                        {children}
                    </Box>
                </Box>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Created by{' Jakub Naumowicz '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}